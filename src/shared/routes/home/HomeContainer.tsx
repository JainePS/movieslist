import React from 'react';
import Home from './Home';
import useMoviesByGenre from '../../../modules/movie/hooks/movie';
import {MovieCategory} from '../../utils/moviesCategories';

const HomeContainer = () => {
  const {isLoading, movies} = useMoviesByGenre(MovieCategory.COMEDY);
  return <Home isLoading={isLoading} movies={movies} />;
};

export default HomeContainer;
