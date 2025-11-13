import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Component1 } from "./store/data";
import { BrowserRouter } from "react-router";

import AuthProvider from "./context/AuthProvider.jsx";
import InitialRefreshToken from "./context/InitialRefreshToken.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Component1>
       <AuthProvider>
          <InitialRefreshToken>
        <App />
        </InitialRefreshToken>
        </AuthProvider>
    </Component1>
  </BrowserRouter>
);

