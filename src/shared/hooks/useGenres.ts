import {useQuery} from '@tanstack/react-query';
import {fetchGenres} from '../services/genreService';

const useGenres = () => {
  const {data: genres = []} = useQuery({
    queryKey: ['movie-genres'],
    queryFn: () => fetchGenres(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {
    genres,
  };
};

export default useGenres;
