import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Component1 } from "./store/data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Component1>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Component1>
);
