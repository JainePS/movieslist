import React from 'react';
import {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

type PosterProps = {
  imgSrc?: string;
};

const Poster = ({imgSrc}: PosterProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imgSrc}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#F1F1F1',
    width: 343,
    height: 119,
  },
  image: {
    width: 343,
    height: 119,
    borderRadius: 8,
  },
});

export default memo(Poster);
