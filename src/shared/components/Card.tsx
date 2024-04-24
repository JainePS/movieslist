import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {Avatar, ListItem} from '@rneui/base';
import {ListItemContent} from '@rneui/base/dist/ListItem/ListItem.Content';
import {ListItemTitle} from '@rneui/base/dist/ListItem/ListItem.Title';
import {ListItemSubtitle} from '@rneui/base/dist/ListItem/ListItem.Subtitle';
import {CardBase} from '@rneui/base/dist/Card/Card';
import {CardProps} from '../types/movie/card';
import HeartIcon from '../icons/HeartIcon';

const Card = ({movie}: CardProps) => {
  const AVATAR_SOURCE = useMemo(
    () =>
      movie.posterURL
        ? movie.posterURL
        : 'src/assets/images/placeholder_view_vector.png',
    [movie.posterURL],
  );

  return (
    <CardBase>
      <ListItem
        containerStyle={{}}
        onPress={() => console.log('onLongPress()')}
        pad={20}>
        <Avatar
          source={{
            uri: AVATAR_SOURCE,
          }}
        />
        <ListItemContent>
          <View>
            <ListItemTitle>
              <Text>{movie.title}</Text>
            </ListItemTitle>
            <ListItemSubtitle>
              <Text>Genre</Text>
            </ListItemSubtitle>
          </View>
        </ListItemContent>
        <HeartIcon />
      </ListItem>
    </CardBase>
  );
};

export default Card;
