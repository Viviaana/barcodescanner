import { createStore } from "redux";
import combineReducers from "../reducers/reducers";

const store = createStore(combineReducers);

export default store;