import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type RatingDisplayProps = {
  source: string;
  value: string;
};

const RatingDisplay = ({source, value}: RatingDisplayProps) => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.rating}>
        <View style={styles.flexRow}>
          <Text>Source: </Text>
          <Text>{source}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text>Rating: </Text>
          <Text style={styles.sourceTxt}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
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
