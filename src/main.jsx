import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
  </FavoritesProvider>
);
