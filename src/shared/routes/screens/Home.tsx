import React from 'react';
import HomeView from '../../../modules/movie/components/HomeView';
import {MoviesContextProvider} from '../../../modules/movie/context/MoviesContext';

const Home = () => {
  return (
    <MoviesContextProvider>
      <HomeView />
    </MoviesContextProvider>
  );
};

export default Home;
