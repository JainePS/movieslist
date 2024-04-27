import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../../../shared/components/organisms/Card';
import {useMoviesContext} from '../../context/MoviesContext';

const MovieCards = () => {
  const {movies, moviesError, IsMoviesLoading} = useMoviesContext();

  if (IsMoviesLoading) {
    return <ActivityIndicator />;
  }

  if (moviesError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.textError}>
          There was an error loading the movies of this genre.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      renderItem={({item}) => <Card movie={item} />}
      keyExtractor={item => `${item.id}`}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 2,
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    padding: 5,
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
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  textError: {
    fontSize: 18,
    color: 'red',
  },
});

export default MovieCards;
