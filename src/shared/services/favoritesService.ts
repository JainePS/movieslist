import {StorageKeys} from '../storage/keys';
import storage from '../storage/storage';
import {getStorageMovieID} from '../storage/utils';
import {Movie} from '../types/movies';

const EXPIRATION_TIME = null;

const addFavorite = (_movie: Movie) => {
  return storage.save({
    key: StorageKeys.Favorites,
    data: {
      ..._movie,
      isFavorite: true,
    },
    id: getStorageMovieID(_movie.id, _movie.genre.id),
    expires: EXPIRATION_TIME,
  });
};

const removeFavorite = ({id, genre}: Movie) => {
  return storage.remove({
    key: StorageKeys.Favorites,
    id: getStorageMovieID(id, genre.id),
  });
};

export const favoriteMovie = async (
  _movie: Movie,
  _newValue: boolean = true,
) => {
  if (_newValue) {
    return addFavorite(_movie);
  }
  return removeFavorite(_movie);
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
