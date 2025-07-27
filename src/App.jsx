/**
 * src/App.jsx
 * 
 * This is the main application component.
 * It sets up the router and defines the routes for the application.
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EquipmentPage from "./pages/EquipmentPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EquipmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
