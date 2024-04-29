import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Poster from '../../../../shared/components/atoms/Poster';
import Tabs from '../../../../shared/components/molecules/Tabs';

import Info from './InfoView';
import RatingView from './RatingView';
import useMovieDetails from '../../../../shared/hooks/useMovieDetails';
import {Movie} from '../../../../shared/types/movies';
import Loading from '../../../../shared/components/atoms/Loading';
import Error from '../../../../shared/components/organisms/Error';

type DetailsProps = {
  movie: Movie;
};

const Details = ({movie}: DetailsProps) => {
  const {title = ''} = movie;

  const [selectedTab, setSelectedTab] = useState(0);
  const {details, isLoading, isError} = useMovieDetails(title);

  const onTabSelect = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  if (isError) {
    return <Error />;
  }

  const renderContent = () => {
    if (selectedTab === 0) {
      return <Info details={details} />;
    } else {
      return <RatingView ratings={details?.ratings} />;
    }
  };

  return (
    <View style={styles.modalView}>
      {isLoading && (
        <View>
          <Loading />
        </View>
      )}
      <Text style={styles.modalTitle}>{details?.title}</Text>
      <Poster imgSrc={details?.poster} />
      <Text style={styles.textDescription}>{details?.plot}</Text>
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
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
    maxHeight: '60%',
    paddingHorizontal: 25,
    marginBottom: 0,
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
