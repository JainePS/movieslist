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

  console.log(moviesError);
  

  if (IsMoviesLoading) {
    return <ActivityIndicator />;
  }

  if (moviesError) {
    <View>
      <Text>There was an error loading the movies of this genre</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item}) => <Card movie={item} />}
        keyExtractor={item => `${item.id}`}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 4,
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
