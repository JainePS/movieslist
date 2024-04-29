import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.lodadingContainer}>
      <View style={styles.lodadingView}>
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lodadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lodadingView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '92%',
  },
});

export default Loading;
