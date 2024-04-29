import {StorageKeys} from '../storage/keys';
import storage from '../storage/storage';
import {getStorageMovieID} from '../storage/utils';
import {Movie} from '../types/movies';

const CACHE_EXPIRATION_TIME = 1000 * 3600;

export const favoriteMovie = async (_movie: Movie) => {
  storage.save({
    key: StorageKeys.Favorites,
    data: _movie,
    id: getStorageMovieID(_movie.id, _movie.genre.id),
    expires: CACHE_EXPIRATION_TIME,
  });
};

export const isFavorite = async (_id: number, _genreId: string) => {
  return storage.load({
    key: StorageKeys.Favorites,
    id: getStorageMovieID(_id, _genreId),
  });
};

export const getFavoritedIds = async () => {
  return storage.getIdsForKey(StorageKeys.Favorites);
};

export const fetchFavorites = async (): Promise<Movie[]> => {
  return await storage.getAllDataForKey<Movie>(StorageKeys.Favorites);
};
