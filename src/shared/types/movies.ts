import {Element} from './common';

export type SampleapisMovie = {
  id: number;
  title: string;
  posterURL: string;
  imdbId: string;
};

export type Movie = SampleapisMovie & {
  genre: Genre;
};

export type Genre = Element & {};
