import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ratingViewProps = {
  ratingSouce: string;
  rating: string;
};

const RatingDisplay = ({ratingSouce, rating}: ratingViewProps) => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.rating}>
        <View style={styles.flexRow}>
          <Text style={styles.sourceTxt}>Source: </Text>
          <Text>{ratingSouce}</Text>
        </View>
        <Text style={styles.sourceTxt}>Rating: </Text>
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 15,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {
    height: 20,
  },
  img: {
    width: 20,
    height: 20,
    padding: 5,
  },
  sourceTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default RatingDisplay;
