import React from 'react';

import {ReactNode, createContext, useContext, useState} from 'react';
import useMoviesByGenre from '../../../shared/hooks/useMovies';
import {Movie} from '../../../shared/types/movies';
import MovieDetailsModal from '../components/modals/MovieDetailsModal';
import useFavorites from '../../../shared/hooks/useFavorites';

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
  favorites: Movie[];
  favoritesError: Error | null;
  onFavorite: (_movie: Movie, _newValue: boolean) => void;
};

export const MoviesContext = createContext<MoviesContextProviderValue>({
  selectedGenreId: '',
  onSelectGenre: () => {},
  movies: [],
  IsMoviesLoading: false,
  moviesError: null,
  showMovieDetails: (_movie: Movie) => {},
  favorites: [],
  favoritesError: null,
  onFavorite: (_movie: Movie, _newValue: boolean) => {},
});

export const MoviesContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const {favorites, favoritesError, onFavorite} = useFavorites();

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
    // Header Menu
    selectedGenreId,
    onSelectGenre,
    // Movies
    movies,
    IsMoviesLoading,
    moviesError,
    showMovieDetails,
    // Favorites
    favorites,
    favoritesError,
    onFavorite,
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
