import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1, // Adjust height as needed
    backgroundColor: 'gray', // Customize color as needed
    marginVertical: 10, // Adjust vertical margin as needed
  },
});

export default Divider;
