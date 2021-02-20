import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  tours: [],
  user: null,
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

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }

  function removeUser() {
    dispatch({
      type: "REMOVE_USER",
      payload: null,
    });
  }

  return (
    <Context.Provider
      value={{
        tours: state.tours,
        tour: state.tour,
        user: state.user,
        addTours,
        addTour,
        addUser,
        removeUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
