import React from 'react';
import SelectorHeader from '../../../../shared/components/molecules/SelectorHeader';
import useGenres from '../../hooks/useGenres';

const GenresHeader = () => {
  const {genres} = useGenres();

  return (
    <SelectorHeader
      elements={genres}
      selectedElementID="123"
      onPress={_id => {}}
    />
  );
};

export default GenresHeader;
