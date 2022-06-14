import Footer from './components/Footer';
import Products from './components/Products';
import { useState } from 'react';
import { useEffect } from 'react';
import AddProduct from './components/AddProduct';
// import Product from './components/Product';
import ViewProduct from './components/ViewProduct';
import Home from './pages/Home/Home';


function App() {
  const getLocalItems =()=>{
    let list = localStorage.getItem('lists');
    if(list){
      return JSON.parse(localStorage.getItem('lists'));
    }
    else{
      return [];
    } 

  };
  const addProduct = (name, desc, price, category, brand) => {
    console.log("Adding", name, desc, price, category);

    let id;
    if (products.length) {
      id = products[products.length - 1].pid + 1;
    }
    else {
      id = 1;
    }
    console.log(id);
    const myProduct = {

      pid: id,
      name: name,
      desc: desc,
      price: price,
      category: category,
      brand: brand
    }
    setProducts([...products, myProduct]);

  }
  const onView = (product)=>{
    console.log(product.pid);
   <ViewProduct/>
}
  const onDelete = (product) => {
    setProducts(products.filter((e) => {
      return e !== product;
    }))
  }
  const [products, setProducts] = useState(getLocalItems());
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(products))
  }, [products])
  
  return (
    // <div className="App">
    <>
      <Home />
      {/* <AddProduct addProduct={addProduct} />
      <Products products={products} onDelete={onDelete}/> */}
      <Footer />
      </> 
    // </div>
  );
}

export default App;
