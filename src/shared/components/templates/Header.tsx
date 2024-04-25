import React from 'react';
import {ScrollView, View} from 'react-native';
import ButtonView from '../atoms/Button';
import {headerStyles} from '../../styles/header.styles';
import {MovieGenre} from '../../utils/moviesCategories';
import {scrollHorizontalViewstyles} from '../../styles/scrollView.styles';

const Header = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={scrollHorizontalViewstyles.container}>
      <View style={headerStyles.container}>
        {Object.keys(MovieGenre).map(genre => {
          return <ButtonView key={genre} variant={'outline'} title={genre} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Header;
