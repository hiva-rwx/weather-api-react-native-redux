import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import Weather from "./src/Weather";

export default function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}
