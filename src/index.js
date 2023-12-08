import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import TracademyProvider from "./context/TracademyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <TracademyProvider>
        <Router>
          <App />
        </Router>
      </TracademyProvider>
    </div>
  </React.StrictMode>
);
