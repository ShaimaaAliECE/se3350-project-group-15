import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// React-Alert -> optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
