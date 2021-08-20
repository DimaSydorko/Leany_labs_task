import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import geolocationReduser from "./location-redser";

let reducers = combineReducers({
  geolocation: geolocationReduser,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.__store__ = store

export default store