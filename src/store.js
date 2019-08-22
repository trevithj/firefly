//STORE
import React, { createContext, useReducer, useContext } from 'react';
/*
Based on design described here:
https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
*/

// export to allow access to store consumer...
export const StoreContext = createContext({});

// ...or use a custom hook - simpler
export const useStore = () => useContext(StoreContext);

export const StoreProvider = props => {
  const { reducer, initialState, children } = props;
  const STORE = useReducer(reducer, initialState);
  global.STORE = {
    state: STORE[0], //for testing
    dispatch: STORE[1] //for testing
  };
  return (
    <StoreContext.Provider value={STORE}>{children}</StoreContext.Provider>
  );
};
