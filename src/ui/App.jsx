import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./Applayout";
import Home from "../pages/home/Homepage.jsx";
import Cart from "../pages/cart/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
