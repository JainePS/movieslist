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
  const {data} = await axios.get<SampleapisMovie[]>(
    `https://api.sampleapis.com/movies/${genreId}`,
  );
  return sanitizeMovies(data, genreId);
};
