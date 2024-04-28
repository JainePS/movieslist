import React, {useEffect} from 'react';
import SelectorHeader from '../../../../shared/components/molecules/SelectorHeader';
import {useMoviesContext} from '../../context/MoviesContext';
import useGenres from '../../../../shared/hooks/useGenres';

const GenresHeader = () => {
  const {genres} = useGenres();
  const {selectedGenreId, onSelectGenre} = useMoviesContext();

  /**
   * Select the first genre as default value
   */
  useEffect(() => {
    if (genres && genres.length > 0) {
      const {id} = genres[1];
      id && onSelectGenre(id);
    }
  }, [genres]);

  return (
    <SelectorHeader
      elements={genres}
      selectedElementID={selectedGenreId}
      onPress={onSelectGenre}
    />
  );
};

export default GenresHeader;
