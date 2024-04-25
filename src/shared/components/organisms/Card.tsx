import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardProps} from '../../types/movie/card';
import HeartIcon from '../atoms/icons/HeartIcon';

const Card = ({movie}: CardProps) => {
  // const AVATAR_SOURCE = useMemo(
  //   () =>
  //     movie?.posterURL
  //       ? movie.posterURL
  //       : 'src/assets/images/placeholder_view_vector.png',
  //   [movie.posterURL],
  // );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => console.log('onLongPress()')}>
        <View style={styles.flexRow}>
          {/* <Image
            source={{
              uri: AVATAR_SOURCE,
            }}
          /> */}
          <View style={styles.flexCol}>
            <Text>{movie.title}</Text>
            <Text>Genre</Text>
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
    paddingTop: StatusBar.currentHeight,
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
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  movieTitle: {
    fontFamily: 'Satoshi-Black',
  },
});

export default Card;
