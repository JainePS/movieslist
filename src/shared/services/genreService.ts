import {Genre} from '../types/movies';
import {createGenreBySampleapiIDs} from '../utils/externalApis';

const SAMPLE_APIS_MOVIE_GENRES_ID = [
  'action-adventure',
  'animation',
  'classic',
  'comedy',
  'drama',
  'horror',
  'family',
  'mystery',
  'scifi-fantasy',
  'western',
];
export const fetchGenres = (): Promise<Genre[]> => {
  const genres: Genre[] = [];

  SAMPLE_APIS_MOVIE_GENRES_ID.forEach(id => {
    const PARSED_GENRE: Genre = createGenreBySampleapiIDs(id);
    genres.push(PARSED_GENRE);
  });

  return new Promise<Genre[]>(resolve => {
    resolve(genres);
  });
};
