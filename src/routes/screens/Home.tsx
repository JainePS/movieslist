import React from 'react';
import {MoviesContextProvider} from '../../modules/movie/context/MoviesContext';
import HomeView from '../../modules/movie/components/views/HomeView';

const Home = () => {
  return (
    <MoviesContextProvider>
      <HomeView />
    </MoviesContextProvider>
  );
};

export default Home;
