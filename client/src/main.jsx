import React from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Component1 } from "./store/data";
import { BrowserRouter } from "react-router";

import AuthProvider from "./store/AuthProvider.jsx";
import InitialRefreshToken from "./store/InitialRefreshToken.jsx";

createRoot(document.getElementById("root")).render(
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
