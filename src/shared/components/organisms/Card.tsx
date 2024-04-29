import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeartIcon from '../atoms/icons/HeartIcon';
import Avatar from '../atoms/Avatar';
import {Movie} from '../../types/movies';
import storage from '../../storage/storage';

type CardProps = {
  movie: Movie;
  onPress: () => void;
  onFavorite: (_movie: Movie, _newValue: boolean) => void;
};

const FALLBACK_IMAGE_URL = 'assets/images/placeholder_view_vector.png';

const isFavoritedStyle = (isFavorited: boolean) =>
  isFavorited ? '#D02F69' : 'none';

const Card = ({movie, onPress, onFavorite}: CardProps) => {
  const MOVIE_IMG = movie?.posterURL ?? FALLBACK_IMAGE_URL;

  const [isFavorite, setIsFavorite] = useState<boolean>(movie?.isFavorite);

  const onPressFavorite = () => {
    const NEW_VALUE = !isFavorite;
    setIsFavorite(NEW_VALUE);
    onFavorite(movie, NEW_VALUE);
  };

  // storage.clearMap();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContent} onPress={onPress}>
        <View style={styles.flexRow}>
          <Avatar imgSrc={MOVIE_IMG} />
          <View style={styles.flexCol}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.genre}>{movie.genre.value}</Text>
          </View>
        </View>
        <Pressable onPress={onPressFavorite}>
          <HeartIcon fill={isFavoritedStyle(isFavorite)} />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemContent: {
    padding: 10,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 8,
    alignItems: 'center',
  },
  movieTitle: {
    fontFamily: 'Satoshi-Black',
    fontSize: 14,
    color: 'black',
    fontWeight: '900',
  },
  genre: {
    color: '#D02F69',
    fontFamily: 'Satoshi',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default Card;
