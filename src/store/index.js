import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/auth";
import authMiddleware from "./middlewares/auth";
import registerAuthListeners from "./listeners/auth";

const store = createStore(
  combineReducers({
    authState: authReducer
  }),
  applyMiddleware(authMiddleware)
);

/*
 * Register Listeners
 * */
registerAuthListeners(store);

/*
 * Subscriptions Only for debugging
 * store.subscribe(()=> {});
 * */

export default store;
