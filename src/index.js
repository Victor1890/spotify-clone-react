import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayer } from "./redux/DataLayer";
import reduce, { initialState } from "./redux/Reduce";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reduce={reduce}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
