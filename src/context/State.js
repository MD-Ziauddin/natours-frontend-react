import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  tours: [],
  tour: {},
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

  function addTour(tour) {
    dispatch({
      type: "ADD_TOUR",
      payload: tour,
    });
  }

  return (
    <Context.Provider
      value={{ tours: state.tours, tour: state.tour, addTours, addTour }}
    >
      {children}
    </Context.Provider>
  );
};
