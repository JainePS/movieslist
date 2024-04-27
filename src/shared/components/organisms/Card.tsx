import React, {useMemo} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardProps} from '../../types/movie/card';
import HeartIcon from '../atoms/icons/HeartIcon';
import Avatar from '../atoms/Avatar';

const Card = ({movie}: CardProps) => {
  const MOVIE_IMG = movie.posterURL
    ? movie.posterURL
    : 'assets/images/placeholder_view_vector.png';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() => console.log('onLongPress()')}>
        <View style={styles.flexRow}>
          <Avatar imgSrc={MOVIE_IMG} />
          <View style={styles.flexCol}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.genre}>{movie.genre.value}</Text>
          </View>
        </View>
        <HeartIcon />
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
