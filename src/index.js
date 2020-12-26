import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target);
    }
    return {value, onChange};
}

const App = () => {
    const name = useInput("Mr.");
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