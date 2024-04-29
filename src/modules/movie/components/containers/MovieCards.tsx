import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../../../../shared/components/organisms/Card';
import {useMoviesContext} from '../../context/MoviesContext';
import Error from '../../../../shared/components/organisms/Error';
import Loading from '../../../../shared/components/atoms/Loading';

const MovieCards = () => {
  const {movies, IsMoviesLoading, moviesError, showMovieDetails} =
    useMoviesContext();

  if (IsMoviesLoading) {
    return <Loading />;
  }

  if (moviesError) {
    return <Error />;
  }

  return (
    <FlatList
      data={movies}
      renderItem={({item}) => (
        <Card movie={item} onPress={() => showMovieDetails(item)} />
      )}
      keyExtractor={item => `${item.id}`}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 2,
  },
});

export default MovieCards;
