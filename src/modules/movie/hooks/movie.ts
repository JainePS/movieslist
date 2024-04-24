import {useQuery} from '@tanstack/react-query';
import {fetchMoviesByGenre} from '../../../context/movie/application/movies';

const useMoviesByGenre = (genre: string) => {
  const {isPending, data: movies} = useQuery({
    queryKey: ['drama'],
    queryFn: () => fetchMoviesByGenre(genre),
  });

  return {isPending, movies};
};

export default useMoviesByGenre;
