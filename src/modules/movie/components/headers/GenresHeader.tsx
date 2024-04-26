import React from 'react';
import SelectorHeader from '../../../../shared/components/molecules/SelectorHeader';
import useGenres from '../../hooks/useGenres';
import {useMoviesContext} from '../../context/MoviesContext';

const GenresHeader = () => {
  const {genres} = useGenres();
  const {selectedGenreId, onSelectGenre} = useMoviesContext();

  return (
    <SelectorHeader
      elements={genres}
      selectedElementID={selectedGenreId}
      onPress={onSelectGenre}
    />
  );
};

export default GenresHeader;
