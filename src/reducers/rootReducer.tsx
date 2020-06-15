import { combineReducers } from "redux";

import loadUserReducer from "./loadUserReducer";

const rootReducer = combineReducers({
  loadUserReducer,
});

export default rootReducer;
