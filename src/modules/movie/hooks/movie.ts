import {useQuery} from '@tanstack/react-query';
import {fetchMoviesByGenre} from '../../../context/movie/application/movies';

const useMoviesByGenre = (genre: string) => {
  const {isLoading, data: movies} = useQuery({
    queryKey: ['drama'],
    queryFn: () => fetchMoviesByGenre(genre),
  });

  return {isLoading, movies};
};

export default useMoviesByGenre;
