import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import events from "./reducers/events";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
