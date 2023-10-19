// 1) import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 2) get a refernece to the div with ID root
const el = document.getElementById("root");
// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4) create a component
// i created it in the App.js file
// 5)show the component on the screen
root.render(<App />);
