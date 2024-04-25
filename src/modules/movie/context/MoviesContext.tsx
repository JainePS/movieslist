import {ReactNode, createContext, useContext} from 'react';

export type MoviesContextProviderProps = {
  children: ReactNode;
};

type MoviesContextProviderValue = {};

export const MoviesContext = createContext<MoviesContextProviderValue>({});

export const MoviesContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  // hace unas cosas piola

  const contextValue = {};

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
