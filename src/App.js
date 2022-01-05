
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import CookieDetail from "./components/CookieDetail";
import React,{useState} from "react";



function App() {
const [product,setProduct] =useState({
  name: "Chocolate Chip Cookie",
  price: 10,
  description: "Classic cookie teast" ,
  image:
    "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
     

})
const printCookie=(product)=>{
  setProduct(product);
} ;

  return (
    <div>
      <Home />
      <ProductList setProduct={setProduct}/>
      <CookieDetail cookie = {product} />
      
    </div>
  );
}

export default App;
