import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EmojiExplodeIcon from '../atoms/icons/EmojiExplodeIcon';

const Error = () => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.errorView}>
        <EmojiExplodeIcon fill="none" stroke="#414141" w={'40'} h={'40'} />
        <Text style={styles.textStyle}>Sorry for the inconvenience.</Text>
        <Text style={styles.errorText}>
          Something went weong with the selected genre. Please, chose another
          genre.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '92%',
  },
  errorView: {
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '80%',
    height: '30%',
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'Black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
  },
  errorText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#414141',
  },
});

export default Error;
