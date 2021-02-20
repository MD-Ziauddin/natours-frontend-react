export default (state, action) => {
  switch (action.type) {
    case "ADD_TOURS":
      return {
        ...state,
        tours: [...state.tours, ...action.payload],
      };

    case "ADD_TOUR":
      return {
        ...state,
        tour: action.payload,
      };

    default:
      return state;
  }
};
