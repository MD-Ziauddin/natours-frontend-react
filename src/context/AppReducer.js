export default (state, action) => {
  switch (action.type) {
    case "ADD_TOURS":
      return {
        ...state,
        tours: [...state.tours, action.payload],
      };

    default:
      return state;
  }
};
