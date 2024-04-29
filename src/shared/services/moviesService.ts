import axios from 'axios';
import {Movie, SampleapisMovie} from '../types/movies';
import {createGenreBySampleapiIDs} from '../utils/externalApis';
import {getFavoritedIds} from './favoritesService';
import {getStorageMovieID} from '../storage/utils';

const sanitizeMovies = async (
  movies: SampleapisMovie[],
  genreId: string,
): Promise<Movie[]> => {
  const FAVORITE_IDS = await getFavoritedIds();

  return movies.map(movie => {
    return {
      ...movie,
      genre: createGenreBySampleapiIDs(genreId),
      isFavorite: FAVORITE_IDS.includes(getStorageMovieID(movie.id, genreId)),
    };
  });
};

export const fetchMoviesByGenre = async (genreId: string): Promise<Movie[]> => {
  if (genreId === 'Favorites') {
    return [];
  }
  const {data} = await axios.get<
    SampleapisMovie[] & {error: string; message: string}
  >(`https://api.sampleapis.com/movies/${genreId}`);

  if (data.error) {
    throw new Error('There was an error fetching the movies');
  }

  return await sanitizeMovies(data, genreId);
};
