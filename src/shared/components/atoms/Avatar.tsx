import React from 'react';
import {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const FALLBACL_IMG = require('../../../assets/images/placeholderImg.png');

type AvatarProps = {
  imgSrc?: string;
};

const Avatar = ({imgSrc}: AvatarProps) => {
  const imageSource = imgSrc ? {uri: imgSrc} : FALLBACL_IMG;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#F1F1F1',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export default memo(Avatar);
