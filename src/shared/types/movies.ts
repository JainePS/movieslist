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

export type MovieDetails = {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  Awards: string;
  poster: string;
  ratings: Rating[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
};

export type Rating = {
  Source: string;
  Value: string;
};
