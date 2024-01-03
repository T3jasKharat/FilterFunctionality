// src/reducers/apiDataReducer.js
const apiDataReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default apiDataReducer;
