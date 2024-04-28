import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from '../../../../shared/types/movies';
import Divider from '../../../../shared/components/atoms/Divider';

const RatingDisplay = ({source, value}: Rating) => {
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
    // flexDirection: 'column',
    // columnGap: 5,
    // width: '100%',
    // height: '100%',
  },
  flexRow: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 1,
    width: '100%',
    columnGap: 3,
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
