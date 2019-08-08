import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";
// import "jquery";
// import "bootstrap";
import "typeface-open-sans";
import App from "./App";

const initialState = {
  agree: "none",
  view: "overview",
  overview: { tab: "artists", order: "mostPlayed" },
  animals: { catVids: 198, recent: 84 },
  food: { pizzaSlices: 5, recent: 2 },
  music: { favSongs: 1324, recent: 24 }
};

const reducer = (state, newState) => {
  return { ...state, ...newState };
};

ReactDOM.render(
  <StoreProvider reducer={reducer} initialState={initialState}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
