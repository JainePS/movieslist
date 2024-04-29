// import storage from '../storage/storage';
// /** Use this mothod to clear map and remove all "key-id" data from local storage.*/
// storage.clearMap();

export const getStorageMovieID = (_movieId: number, _genreId: string) =>
  `${_movieId}-${_genreId}`;
