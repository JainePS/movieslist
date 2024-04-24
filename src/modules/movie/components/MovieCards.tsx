import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Movie} from '../../../shared/types/movie/movie';
import Card from '../../../shared/components/Card';

export type MoviesProps = {
  movies?: Movie[];
};

const MovieCards = ({movies}: MoviesProps) => {
  return (
    <SafeAreaView>
      <FlatList
        data={movies}
        renderItem={({item}) => <Card movie={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};

export default MovieCards;
