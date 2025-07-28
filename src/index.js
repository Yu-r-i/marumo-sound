/**
 * src/index.js
 * 
 * This is the entry point of the application.
 * It initializes the React application and renders the main App component.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
