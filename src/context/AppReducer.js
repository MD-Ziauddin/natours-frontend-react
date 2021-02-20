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

    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "REMOVE_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
