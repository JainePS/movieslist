import React from 'react';
import Home from './Home';
import useMoviesByGenre from '../../../modules/movie/hooks/movie';
import {MovieCategory} from '../../utils/moviesCategories';

const HomeContainer = () => {
  const {isPending, movies} = useMoviesByGenre(MovieCategory.COMEDY);
  return <Home isLoading={isPending} movies={movies} />;
};

export default HomeContainer;
