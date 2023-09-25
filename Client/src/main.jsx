import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import globle from "./redux/globle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider globle={globle}>
    <App />
  </Provider>
);
