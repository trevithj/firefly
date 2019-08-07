import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";
// import "jquery";
// import "bootstrap";
import "typeface-open-sans";
import App from "./App";

const initialState = {};

const reducer = (state, newState) => {
  return { ...state, ...newState };
};

ReactDOM.render(
  <StoreProvider reducer={reducer} initialState={initialState}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
