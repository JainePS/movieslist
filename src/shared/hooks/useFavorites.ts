import {useQuery, useQueryClient} from '@tanstack/react-query';
import {favoriteMovie, fetchFavorites} from '../services/favoritesService';
import {StorageKeys} from '../storage/keys';
import {Movie} from '../types/movies';

const useFavorites = () => {
  const queryClient = useQueryClient();

  const onFavorite = (_movie: Movie, _newValue: boolean) => {
    favoriteMovie(_movie, _newValue);
    queryClient.invalidateQueries({queryKey: [StorageKeys.Favorites]});
  };

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

  return {onFavorite, isFavoritesLoading, favorites, favoritesError};
};

export default useFavorites;
