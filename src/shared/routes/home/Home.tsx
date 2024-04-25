import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
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
    <View style={styles.container}>
      <MovieCards movies={movies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 18,
  },
});
export default Home;
