import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeartIcon from '../atoms/icons/HeartIcon';

type NoContentProps = {
  content: string;
  text?: string;
};

const NoContent = ({content, text}: NoContentProps) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.errorView}>
        <Text style={styles.textStyle}>There is no {content} yet.</Text>
        <View style={styles.icon}>
          <HeartIcon />
        </View>
        <Text style={styles.text}>{text}</Text>
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
  icon: {
    marginBottom: 10,
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
  text: {
    color: 'Black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 15,
  },
  errorText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#414141',
  },
});

export default NoContent;
