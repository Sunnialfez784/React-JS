import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DataProvider from "./context/DataContext";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
);
