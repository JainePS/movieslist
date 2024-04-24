import axios from 'axios';
import {Movie} from '../../../shared/types/movie/movie';

export const fetchMoviesByGenre = async (genre: string) => {
  const {data} = await axios.get<Movie[]>(
    `https://api.sampleapis.com/movies/${genre}`,
  );
  return data;
};
