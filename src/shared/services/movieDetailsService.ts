import axios from 'axios';
import {MovieDetails} from '../types/movies';
import {sanitizeMovieResponseKeys} from '../utils/externalApis';

/**
 * Convert the movie title in the following example: 'incredibles+2'
 */
const sanitizeMovieTitles = (movieTitle: string) => {
  return movieTitle.split(' ').join('+').toLowerCase();
};

const buildAPIUrl = () => {
  // Add .env in a real world app
  const API_key = 'ac298c31';
  if (!API_key) {
    throw new Error('There is no OMDB_API_KEY');
  }

  return `http://www.omdbapi.com/?apikey=${API_key}`;
};

export const fetchMovieDetailsByTitle = async (
  title: string,
): Promise<MovieDetails> => {
  const titleId = sanitizeMovieTitles(title);

  const {data} = await axios.get<
    MovieDetails & {error: string; message: string}
  >(`${buildAPIUrl()}&t=${titleId}`);

  if (data.error) {
    throw new Error('There was an error fetching the movie details');
  }

  return sanitizeMovieResponseKeys(data);
};
