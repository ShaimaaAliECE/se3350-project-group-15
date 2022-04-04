import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { CookiesProvider } from "react-cookie";
import { ModalProvider } from "react-modal-hook";

// React-Alert -> optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 1000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <AlertProvider template={AlertTemplate} {...options}>
          <ModalProvider>
              <App />
          </ModalProvider>

      </AlertProvider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
