import { createContext, FC, PropsWithChildren, useContext } from 'react';

export interface FunctionsMap {}

const FunctionsContext = createContext<FunctionsMap>({});

export const FunctionsProvider: FC<
  PropsWithChildren<{ value: FunctionsMap }>
> = ({ value, children }) => (
  <FunctionsContext.Provider value={value}>
    {children}
  </FunctionsContext.Provider>
);

export const useFunctions = () => useContext(FunctionsContext);
