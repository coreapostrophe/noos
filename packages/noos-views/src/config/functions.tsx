import { createContext, FC, PropsWithChildren, useContext } from 'react';

export interface FunctionsMap {}

const FunctionsContext = createContext<FunctionsMap>({});

export interface FunctionsProviderProps {
  value: FunctionsMap;
}

export const FunctionsProvider: FC<
  PropsWithChildren<FunctionsProviderProps>
> = ({ value, children }) => (
  <FunctionsContext.Provider value={value}>
    {children}
  </FunctionsContext.Provider>
);

export const useFunctions = () => useContext(FunctionsContext);
