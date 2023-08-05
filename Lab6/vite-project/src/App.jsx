import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import { products } from "./Component/Product";
import CartList from "./Component/CartList";
function App() {
  const [productsIncart, setProductIncart] = useState([]);
  function addProduct(object) {
    const newProductsIncart = [...productsIncart, object];
    setProductIncart(newProductsIncart);
  }
  console.log(productsIncart);
  return (
    <>
      <Cart productsIncart={productsIncart} />
      <ProductList products={products} addProduct={addProduct} />
      <h2 className="heading-product-colected">Giỏ hàng</h2>
      <CartList productsIncart={productsIncart} />
    </>
  );
}

export default App;
