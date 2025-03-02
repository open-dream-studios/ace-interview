import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import { AuthContextProvider } from "./Context/authContext";
import { DarkModeContextProvider } from "./Context/darkModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
