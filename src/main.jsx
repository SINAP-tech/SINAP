import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from './Context/AuthContext.jsx'

import App from "./App";

import "./index.css";
import './styles/SINAP-Responsive.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>
);
