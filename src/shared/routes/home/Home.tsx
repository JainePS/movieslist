import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Movie} from '../../types/movie/movie';

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
      <Text>Hello world</Text>
    </View>
  );
};

export default Home;
