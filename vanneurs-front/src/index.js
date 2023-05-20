import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./containers/App/App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
