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
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type Rating = {
  Source: string;
  Value: string;
};
