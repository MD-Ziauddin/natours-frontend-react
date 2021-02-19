import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  tours: [],
};

// Create Context
export const Context = createContext(initialState);

// Provide Component
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   Acctions
  function addTours(tours) {
    dispatch({
      type: "ADD_TOURS",
      payload: tours,
    });
  }

  return (
    <Context.Provider value={{ tours: state.tours, addTours }}>
      {children}
    </Context.Provider>
  );
};
