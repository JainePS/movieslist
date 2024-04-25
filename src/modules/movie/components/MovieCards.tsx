import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Movie} from '../../../shared/types/movie/movie';
import Card from '../../../shared/components/organisms/Card';

export type MoviesProps = {
  movies?: Movie[];
};

const MovieCards = ({movies}: MoviesProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item}) => <Card movie={item} />}
        keyExtractor={item => `${item.id}`}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 8,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
});

export default MovieCards;
