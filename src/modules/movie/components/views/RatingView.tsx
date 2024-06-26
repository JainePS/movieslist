import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Rating} from '../../../../shared/types/movies';
import RatingDisplay from './RatingDisplay';

type ratingViewProps = {
  ratings?: Rating[];
};

const RatingView = ({ratings = []}: ratingViewProps) => {
  return (
    <View style={styles.container}>
      {ratings.map((moviewRating, index) => {
        return (
          <RatingDisplay
            key={`${moviewRating.Source}-${index}`}
            source={moviewRating.Source}
            value={moviewRating.Value}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 15,
    width: '100%',
    // height: '50%',
  },
});
export default RatingView;
