import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import events from "./reducers/events";
import labels from "./reducers/labels";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events,
      labels,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
