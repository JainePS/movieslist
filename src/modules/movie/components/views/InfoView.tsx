import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import CalendarIcon from '../../../../shared/components/atoms/icons/CalendarIcon';
import TranslateIcon from '../../../../shared/components/atoms/icons/TranslateIcon';
import MovieIcon from '../../../../shared/components/atoms/icons/MovieIcon';
import ClockIcon from '../../../../shared/components/atoms/icons/ClockIcon';

import {MovieDetails} from '../../../../shared/types/movies';

type InfoViewProps = {
  details?: MovieDetails;
};

const Info = ({details}: InfoViewProps) => {
  if (!details) {
    return (
      <View>
        <Text>There is no details associated to this movie.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <CalendarIcon />
        <Text>{details.released}</Text>
      </View>
      <View style={styles.flexRow}>
        <TranslateIcon />
        <Text>{details.language}</Text>
      </View>
      <View style={styles.flexRow}>
        <MovieIcon />
        <Text>{details.genre}</Text>
      </View>
      <View style={styles.flexRow}>
        <ClockIcon />
        <Text>{details.runtime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    gap: 4,
    padding: 15,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: 4,
    gap: 4,
  },
});

export default Info;
