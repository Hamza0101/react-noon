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

function App() {
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  const onView = (product) => {
    console.log(product.pid);
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
      {/* <Home /> */}
      {/* <AddProduct addProduct={addProduct} />
      <Products products={products} onDelete={onDelete}/> */}
      <Products />
      {/* <ProductDetails/> */}
    </>
    // </div>
  );
}

export default App;
