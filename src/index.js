import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useInput } from "./useInput/useInput";

import "./styles.css";

const App = () => {
    const maxLen = value => !value.includes("@");
    const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);