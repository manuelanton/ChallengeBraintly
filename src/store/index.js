import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function saveToLocal(state) {
  try {
    const stringStore = JSON.stringify(state);
    localStorage.setItem("state", stringStore);
  } catch (e) {
    console.log(e);
  }
}

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware))
);
