import {Element} from './common';

export type Movie = {
  id: number;
  title: string;
  posterURL: string;
  imdbId: string;
};

export type Genre = Element & {};
