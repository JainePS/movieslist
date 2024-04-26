import axios from 'axios';
import {Movie, SampleapisMovie} from '../types/movies';
import {createGenreBySampleapiIDs} from '../utils/externalApis';

const sanitizeMovies = (
  movies: SampleapisMovie[],
  genreId: string,
): Movie[] => {
  return movies.map(movie => ({
    ...movie,
    genre: createGenreBySampleapiIDs(genreId),
  }));
};

export const fetchMoviesByGenre = async (genreId: string): Promise<Movie[]> => {
  const {data} = await axios.get<
    SampleapisMovie[] & {error: string; message: string}
  >(`https://api.sampleapis.com/movies/${genreId}`);

  if (data.error) {
    throw new Error('There was an error fetching the movies');
  }

  return sanitizeMovies(data, genreId);
};
