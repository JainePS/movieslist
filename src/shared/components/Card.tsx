import React from 'react';
import {Text} from 'react-native';
import {Avatar, ListItem} from '@rneui/base';
import {ListItemContent} from '@rneui/base/dist/ListItem/ListItem.Content';
import {ListItemTitle} from '@rneui/base/dist/ListItem/ListItem.Title';
import {ListItemSubtitle} from '@rneui/base/dist/ListItem/ListItem.Subtitle';
import {CardBase} from '@rneui/base/dist/Card/Card';
import {CardProps} from '../types/movie/card';

const Card = ({movie}: CardProps) => {
  return (
    <CardBase>
      <ListItem
        containerStyle={{}}
        disabledStyle={{opacity: 0.5}}
        onPress={() => console.log('onLongPress()')}
        pad={20}>
        <Avatar
          source={{
            uri: movie.posterURL
              ? movie.posterURL
              : 'src/assets/images/placeholder_view_vector.png',
          }}
        />
        <ListItemContent>
          <ListItemTitle>
            <Text>{movie.title}</Text>
          </ListItemTitle>
          <ListItemSubtitle>
            <Text>Genre</Text>
          </ListItemSubtitle>
        </ListItemContent>
      </ListItem>
    </CardBase>
  );
};

export default Card;
