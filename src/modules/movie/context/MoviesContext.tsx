import React from 'react';

import {ReactNode, createContext, useContext, useState} from 'react';
import useMoviesByGenre from '../../../shared/hooks/useMovies';
import {Movie} from '../../../shared/types/movies';
import MovieDetailsModal from '../components/modals/MovieDetailsModal';
import storage from '../../../shared/storage/storage';
import {StorageKeys} from '../../../shared/storage/keys';
import {useQueryClient} from '@tanstack/react-query';

export type MoviesContextProviderProps = {
  children: ReactNode;
};

type MoviesContextProviderValue = {
  selectedGenreId: string;
  movies: Movie[];
  IsMoviesLoading: boolean;
  moviesError: Error | null;
  onFavorite: (_movie: Movie) => void;
  onSelectGenre: (_id: string) => void;
  showMovieDetails: (_movie: Movie) => void;
};

const CACHE_EXPIRATION_TIME = 1000 * 3600;

export const MoviesContext = createContext<MoviesContextProviderValue>({
  selectedGenreId: '',
  onSelectGenre: () => {},
  movies: [],
  IsMoviesLoading: false,
  moviesError: null,
  onFavorite: (_movie: Movie) => {},
  showMovieDetails: (_movie: Movie) => {},
});

export const MoviesContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('');
  const queryClient = useQueryClient();

  const {movies, IsMoviesLoading, moviesError} =
    useMoviesByGenre(selectedGenreId);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>();

  const onSelectGenre = (_id: string) => setSelectedGenreId(_id);

  const onCloseDetailsModal = () => {
    setSelectedMovie(null);
  };

  const showMovieDetails = (movie: Movie) => setSelectedMovie(movie);

  const onFavorite = (_movie: Movie) => {
    storage.save({
      key: StorageKeys.Favorites,
      data: _movie,
      id: `${_movie.id}`,
      expires: CACHE_EXPIRATION_TIME,
    });
    console.log(_movie, 'favorites');
    // Invalidate every query with a key that starts with `favorites`
    queryClient.invalidateQueries({queryKey: [StorageKeys.Favorites]});
  };

  const contextValue = {
    selectedGenreId,
    movies,
    IsMoviesLoading,
    moviesError,
    onFavorite,
    onSelectGenre,
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
