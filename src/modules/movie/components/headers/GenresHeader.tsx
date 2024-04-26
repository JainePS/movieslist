import React, {useEffect} from 'react';
import SelectorHeader from '../../../../shared/components/molecules/SelectorHeader';
import useGenres from '../../hooks/useGenres';
import {useMoviesContext} from '../../context/MoviesContext';

const GenresHeader = () => {
  const {genres} = useGenres();
  const {selectedGenreId, onSelectGenre} = useMoviesContext();

  /**
   * Select the first genre as default value
   */
  useEffect(() => {
    const {id} = genres[0];
    onSelectGenre(id);
  }, [genres, onSelectGenre]);

  return (
    <SelectorHeader
      elements={genres}
      selectedElementID={selectedGenreId}
      onPress={onSelectGenre}
    />
  );
};

export default GenresHeader;
