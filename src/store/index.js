// src/store/index.js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export default store;
