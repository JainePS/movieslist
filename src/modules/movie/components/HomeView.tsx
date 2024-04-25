import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {layoutStyles} from '../../../shared/styles/layout';
import GenresHeader from './headers/GenresHeader';

const HomeView = () => {
  const isLoading = false;
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={layoutStyles.container}>
      <GenresHeader />
    </View>
  );
};

export default HomeView;
