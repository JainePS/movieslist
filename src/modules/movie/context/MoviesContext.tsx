import React from 'react';

import {ReactNode, createContext, useContext, useState} from 'react';
import useMoviesByGenre from '../../../shared/hooks/useMovies';
import {Movie} from '../../../shared/types/movies';
import MovieDetailsModal from '../components/modals/MovieDetailsModal';

export type MoviesContextProviderProps = {
  children: ReactNode;
};

type MoviesContextProviderValue = {
  selectedGenreId: string;
  onSelectGenre: (_id: string) => void;
  movies: Movie[];
  IsMoviesLoading: boolean;
  moviesError: Error | null;
  showMovieDetails: (_movie: Movie) => void;
};

export const MoviesContext = createContext<MoviesContextProviderValue>({
  selectedGenreId: '',
  onSelectGenre: () => {},
  movies: [],
  IsMoviesLoading: false,
  moviesError: null,
  showMovieDetails: (_movie: Movie) => {},
});

export const MoviesContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('');
  const {movies, IsMoviesLoading, moviesError} =
    useMoviesByGenre(selectedGenreId);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>();

  const onSelectGenre = (_id: string) => setSelectedGenreId(_id);

  const onCloseDetailsModal = () => {
    setSelectedMovie(null);
  };

  const showMovieDetails = (movie: Movie) => setSelectedMovie(movie);

  const contextValue = {
    selectedGenreId,
    onSelectGenre,
    movies,
    IsMoviesLoading,
    moviesError,
    showMovieDetails,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          modalVisible={!!selectedMovie}
          onCloseDetailsModal={onCloseDetailsModal}
        />
      )}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error(
      'useMoviesContext needs to be used inside MoviesContextProvider',
    );
  }

  return context;
};
