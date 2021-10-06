import { combineReducers } from "redux";
import { WeatherReducer } from "./WeatherReducer";

export const reducer = combineReducers({
  weather: WeatherReducer,
});
