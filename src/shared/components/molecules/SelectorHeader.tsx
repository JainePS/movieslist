import React, {useCallback, useMemo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MOVIES_GENRE} from '../../utils/moviesCategories';
import {scrollHorizontalViewstyles} from '../../styles/scrollView.styles';
import ButtonView from '../atoms/Button';

const headerStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    gap: 5,
    height: 48,
    flex: 1,
  },
});

type Element = {
  id: string;
  value: string;
};

type HeaderProps = {
  selectedElementID: string;
  elements: Element[];
  onPress: (_id: string) => void;
};

const SelectorHeader = ({
  selectedElementID,
  elements = [],
  onPress,
}: HeaderProps) => {
  /**
   * Memoize the header buttons to avoid unnecessary renders
   */
  const selectorElement = useMemo(
    () => (
      <View style={headerStyles.container}>
        {elements.map(({id, value}) => {
          const VARIANT = selectedElementID === id ? 'solid' : 'outline';

          return (
            <ButtonView
              key={`selector-header-${id}-${value}`}
              variant={VARIANT}
              label={value}
              onButtonPress={() => onPress(id)}
            />
          );
        })}
      </View>
    ),
    [elements, selectedElementID, onPress],
  );

  return (
    <ScrollView
      horizontal
      contentContainerStyle={scrollHorizontalViewstyles.container}>
      {selectorElement}
    </ScrollView>
  );
};

export default SelectorHeader;
