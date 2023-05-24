import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Stock from "./components/Stock/Stock";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
