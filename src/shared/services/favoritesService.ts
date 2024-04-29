import {StorageKeys} from '../storage/keys';
import storage from '../storage/storage';
import {Movie} from '../types/movies';

export const fetchFavorites = async (): Promise<Movie[]> => {
  let data: any[] | PromiseLike<Movie[]> = [];
  await storage.getAllDataForKey(StorageKeys.Favorites).then(movies => {
    data = movies;
  });

  return data;
};
