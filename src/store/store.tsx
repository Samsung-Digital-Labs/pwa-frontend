import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import rootReducer from "../reducers/rootReducer";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

const store = createStoreWithMiddleware(rootReducer);

export default store;
