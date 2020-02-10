import { createContext } from 'react';

export interface AppContextInterface {
  movieRootPath:string;
  movieList:any;
}

const ctxt = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;

// export const MovieProviderProps = props => {
//   const [estimations, setEstimation] = useState([]);

//   const usersContext = {
//     estimations,
//     setEstimation,
//   };
//   return (
//     <EstimationContext.Provider value={usersContext}>
//       {props.children}
//     </EstimationContext.Provider>
//   );
// };
