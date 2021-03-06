import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  const setActive = ({ isActive }) => {
    return { color: isActive ? "RED" : "" };
  };
  return (
    <div className="App">
      <nav>
        <NavLink style={setActive} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={setActive} to="/category">
          {" "}
          Category{" "}
        </NavLink>{" "}
        ||
        <NavLink style={setActive} to="/cart">
          Cart{" "}
        </NavLink>{" "}
        ||
        <NavLink style={setActive} to="/wishlist">
          WishList{" "}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
