// import Footer from './components/Footer';
// import Products from './components/Products';
import { useState } from "react";
import { useEffect } from "react";
// import AddProduct from './components/AddProduct';
// import Product from './components/Product';
import ViewProduct from "./components/ViewProduct";
// import Home from './pages/Home/Home';
import Products from "./pages/Product/Products";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Product/ProductDetails";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Address from "./pages/Address";

function App() {
  const [cart, setCart] = useState([]);
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  const onView = (product) => {
    <ViewProduct />;
  };
  const onDelete = (product) => {
    setProducts(
      products.filter((e) => {
        return e !== product;
      })
    );
  };
  const [products, setProducts] = useState(getLocalItems());
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(products));
  }, [products]);

  return (
    // <div className="App">
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </Router>
    </>
    // </div>
  );
}

export default App;
