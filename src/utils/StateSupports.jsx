import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateSupport = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateSupport = () => useContext(StateContext);