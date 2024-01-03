// src/reducers/index.js
import { combineReducers } from "redux";
import apiDataReducer from "./apiDataReducer";
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  filters: filtersReducer,
});

export default rootReducer;
