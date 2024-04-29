import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Card from '../../../../shared/components/organisms/Card';
import {useMoviesContext} from '../../context/MoviesContext';
import Error from '../../../../shared/components/organisms/Error';

const MovieCards = () => {
  const {movies, IsMoviesLoading, moviesError, showMovieDetails} =
    useMoviesContext();

  if (IsMoviesLoading) {
    return (
      <View style={styles.lodadingContainer}>
        <View style={styles.lodadingView}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
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
  lodadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lodadingView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '92%',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  textError: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '92%',
  },
  errorView: {
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '80%',
    height: '30%',
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'Black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#414141',
  },
});

export default MovieCards;
