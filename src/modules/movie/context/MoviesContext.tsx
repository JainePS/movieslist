import {ReactNode, createContext, useContext, useState} from 'react';
import useMoviesByGenre from '../../../shared/hooks/useMovies';
import {Movie} from '../../../shared/types/movies';

export type MoviesContextProviderProps = {
  children: ReactNode;
};

type MoviesContextProviderValue = {
  selectedGenreId: string;
  onSelectGenre: (_id: string) => void;
  movies: Movie[];
  IsMoviesLoading: boolean;
  moviesError: Error | null;
};

export const MoviesContext = createContext<MoviesContextProviderValue>({
  selectedGenreId: '',
  onSelectGenre: () => {},
  movies: [],
  IsMoviesLoading: false,
  moviesError: null,
});

export const MoviesContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('');
  const {movies, IsMoviesLoading, moviesError} =
    useMoviesByGenre(selectedGenreId);

  console.log('movies', movies);

  const onSelectGenre = (_id: string) => setSelectedGenreId(_id);

  const contextValue = {
    selectedGenreId,
    onSelectGenre,
    movies,
    IsMoviesLoading,
    moviesError,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
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
