// src/reducers/filtersReducer.js
const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FILTERS":
      return action.payload;
    default:
      return state;
  }
};

export default filtersReducer;
