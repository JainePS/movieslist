import {useQuery} from '@tanstack/react-query';
import {fetchMoviesByGenre} from '../services/moviesService';

const useMoviesByGenre = (genreId: string) => {
  const {
    data: movies = [],
    isLoading: IsMoviesLoading,
    error: moviesError,
  } = useQuery({
    queryKey: [`movies-${genreId}`],
    queryFn: () => fetchMoviesByGenre(genreId),
    gcTime: Infinity,
    staleTime: Infinity,
    enabled: !!genreId,
  });

  return {IsMoviesLoading, movies, moviesError};
};

export default useMoviesByGenre;
