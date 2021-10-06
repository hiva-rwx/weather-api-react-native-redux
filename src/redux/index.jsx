import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/index";
// let helperCompose = compose;
// if (__DEV__) {
//     helperCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

// for usage of redux_devTools
// Insert applyMiddleware into the helperCompose function
export const store = createStore(reducer, applyMiddleware(thunk));