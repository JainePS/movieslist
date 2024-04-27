import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Poster from '../../../../shared/components/atoms/Poster';
import Divider from '../../../../shared/components/atoms/Divider';
import Tabs from '../../../../shared/components/molecules/Tabs';

import Info from './InfoView';
import RatingView from './RatingView';

const Details = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabSelect = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  const details = {
    released: 'Release date',
    language: 'Language',
    genre: 'genre',
    runtime: 'Run time',
  };

  const renderContent = () => {
    if (selectedTab === 0) {
      return <Info details={details} />;
    } else {
      return <RatingView />;
    }
  };

  return (
    <View style={styles.modalView}>
      <Text style={styles.modalTitle}>Movie name</Text>
      <Poster />
      <Text style={styles.textDescription}>Description of the movie</Text>
      <Tabs
        tabs={['Info', 'Ratings']}
        onPress={onTabSelect}
        selectedTab={selectedTab}>
        {renderContent()}
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
    height: '50%',
    paddingHorizontal: 25,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  textDescription: {
    color: '#414141',
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 10,
  },
  modalTitle: {
    fontWeight: '900',
    fontFamily: 'Satoshi',
    textAlign: 'center',
    color: 'black',
    width: '100%',
    fontSize: 18,
    padding: 10,
  },
});

export default Details;
