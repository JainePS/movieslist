import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Movie} from '../../types/movie/movie';
import MovieCards from '../../../modules/movie/components/MovieCards';

type HomeProps = {
  isLoading: boolean;
  movies?: Movie[];
};

const Home = ({isLoading, movies}: HomeProps) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <MovieCards movies={movies} />
    </View>
  );
};

export default Home;
