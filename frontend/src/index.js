import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppWrapper } from "./context/store";

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
