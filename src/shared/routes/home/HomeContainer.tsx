import React from 'react';
import Home from './Home';
import useMoviesByGenre from '../../../modules/movie/hooks/movie';
import {MovieGenre} from '../../utils/moviesCategories';

const HomeContainer = () => {
  const {isLoading, movies} = useMoviesByGenre(MovieGenre.Comedy);
  return <Home isLoading={isLoading} movies={movies} />;
};

export default HomeContainer;
