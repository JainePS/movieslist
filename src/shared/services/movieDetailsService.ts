import axios from 'axios';
import {MovieDetails} from '../types/movies';
import {
  sanitizeMovieResponseKeys,
  sanitizeMovieTitles,
} from '../utils/sanitizeMovieTitle';

const buildAPIUrl = () => {
  const API_key = process.env.OMDB_API_KEY ?? '';
  if (!API_key) {
    throw new Error('There is no OMDB_API_KEY');
  }

  return `http://www.omdbapi.com/?apikey=${API_key}`;
};

export const fetchMovieDetailsByTitle = async (
  title: string,
): Promise<MovieDetails> => {
  const titleId = sanitizeMovieTitles(title, '+');

  const {data} = await axios.get<
    MovieDetails & {error: string; message: string}
  >(`${buildAPIUrl()}=${titleId}`);

  if (data.error) {
    throw new Error('There was an error fetching the movie details');
  }

  return sanitizeMovieResponseKeys(data);
};
