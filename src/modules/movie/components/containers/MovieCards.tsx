import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../../../../shared/components/organisms/Card';
import {useMoviesContext} from '../../context/MoviesContext';
import Error from '../../../../shared/components/organisms/Error';
import Loading from '../../../../shared/components/atoms/Loading';
import useFavorites from '../../../../shared/hooks/useFavorites';

const MovieCards = () => {
  const {
    movies,
    IsMoviesLoading,
    selectedGenreId,
    moviesError,
    onFavorite,
    showMovieDetails,
  } = useMoviesContext();
  const {favorites, isFavoritesLoading, favoritesError} = useFavorites();

  if (IsMoviesLoading) {
    return <Loading />;
  }

  if (moviesError) {
    return <Error />;
  }
  // storage.clearMapForKey(StorageKeys.Favorites);

  console.log(favorites, favoritesError, isFavoritesLoading, 'lalala');

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
