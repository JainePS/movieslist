import {useQuery} from '@tanstack/react-query';
import {fetchMovieDetailsByTitle} from '../services/movieDetailsService';

const useMovieDetails = (title: string) => {
  const {
    data: details,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movie-details', title],
    queryFn: () => fetchMovieDetailsByTitle(title),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {
    details,
    isLoading,
    isError,
  };
};

export default useMovieDetails;
