import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../../../../shared/components/organisms/Card';
import {useMoviesContext} from '../../context/MoviesContext';
import Error from '../../../../shared/components/organisms/Error';
import Loading from '../../../../shared/components/atoms/Loading';
import NoContent from '../../../../shared/components/organisms/NoContent';
import {getStorageMovieID} from '../../../../shared/storage/utils';

const MovieCards = () => {
  const {
    selectedGenreId,
    movies,
    IsMoviesLoading,
    moviesError,
    showMovieDetails,
    favorites,
    favoritesError,
    onFavorite,
  } = useMoviesContext();

  if (IsMoviesLoading) {
    return <Loading />;
  }

  if (moviesError || favoritesError) {
    return <Error />;
  }

  if (selectedGenreId === 'Favorites' && favorites.length === 0) {
    return (
      <NoContent
        content={'Favorite movies'}
        text="Browse our films and select your favorites"
      />
    );
  }

  return (
    <FlatList
      data={selectedGenreId === 'Favorites' ? favorites : movies}
      renderItem={({item}) => (
        <Card
          movie={item}
          onPress={() => showMovieDetails(item)}
          onFavorite={onFavorite}
        />
      )}
      keyExtractor={item => getStorageMovieID(item.id, item.genre.id)}
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
