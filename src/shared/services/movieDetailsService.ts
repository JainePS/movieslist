import axios from 'axios';
import {MovieDetails} from '../types/movies';
import {
  sanitizeMovieResponseKeys,
  sanitizeMovieTitles,
} from '../utils/sanitizeMovieTitle';

export const fetchMovieDetailsByTitle = async (
  title: string,
): Promise<MovieDetails> => {
  const titleId = sanitizeMovieTitles(title, '+');

  const {data} = await axios.get<
    MovieDetails & {error: string; message: string}
  >(`http://www.omdbapi.com/?apikey=ac298c31&t=${titleId}`);

  if (data.error) {
    throw new Error('There was an error fetching the movie details');
  }

  return sanitizeMovieResponseKeys(data);
};
