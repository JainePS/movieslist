import React from 'react';
import {SafeAreaView} from 'react-native';
import {layoutStyles} from '../../../../shared/styles/layout';
import GenresHeader from '../headers/GenresHeader';
import MovieCards from '../containers/MovieCards';

const HomeView = () => {
  return (
    <SafeAreaView style={layoutStyles.container}>
      <GenresHeader />
      <MovieCards />
    </SafeAreaView>
  );
};

export default HomeView;
