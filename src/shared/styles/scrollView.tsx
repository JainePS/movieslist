import {StyleSheet, StatusBar} from 'react-native';

export const scrollViewstyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export const scrollHorizontalViewstyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
