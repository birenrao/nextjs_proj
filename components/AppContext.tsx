import { createContext } from 'react';

export interface AppContextInterface {
  movieRootPath:string;
  movieList:any;
}

const ctxt = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;
