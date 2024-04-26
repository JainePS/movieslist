import {ReactNode, createContext, useContext, useState} from 'react';

export type MoviesContextProviderProps = {
  children: ReactNode;
};

type MoviesContextProviderValue = {
  selectedGenreId: string;
  onSelectGenre: (_id: string) => void;
};

export const MoviesContext = createContext<MoviesContextProviderValue>({
  selectedGenreId: '',
  onSelectGenre: () => {},
});

export const MoviesContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('');

  const onSelectGenre = (_id: string) => setSelectedGenreId(_id);

  const contextValue = {
    selectedGenreId,
    onSelectGenre,
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
