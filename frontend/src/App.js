import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Stock from "./components/Stock/Stock";
import Product from "./components/Product/Product";
import Create from "./components/Product/Create/Create";
import Update from "./components/Product/Update/Update";
import Delete from "./components/Product/Delete/Delete";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/stock" element={<Stock />} />
        <Route path="/producto" element={<Product />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
