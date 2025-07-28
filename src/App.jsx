/**
 * src/App.jsx
 * 
 * This is the main application component.
 * It sets up the router and defines the routes for the application.
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EquipmentPage from "./pages/EquipmentPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router basename="/marumo-sound">
      <Header />
      <Routes>
        <Route path="/" element={<EquipmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
