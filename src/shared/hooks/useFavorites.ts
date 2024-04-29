import {useQuery} from '@tanstack/react-query';
import {fetchFavorites} from '../services/favoritesService';
import {StorageKeys} from '../storage/keys';

const useFavorites = () => {
  const {
    data: favorites = [],
    isLoading: isFavoritesLoading,
    error: favoritesError,
  } = useQuery({
    queryKey: [StorageKeys.Favorites],
    queryFn: () => fetchFavorites(),
    gcTime: Infinity,
    staleTime: Infinity,
  });

  return {isFavoritesLoading, favorites, favoritesError};
};

export default useFavorites;
