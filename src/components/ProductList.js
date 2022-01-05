// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import React, { useState } from 'react';

const ProductList = ({setProduct}) => {
  const [query,setQuery]=useState("");
 
  const productList = products
  .filter((product)=>
  product.name.toLowerCase().includes(query.toLowerCase())
  )
  .map((product) => (
    <ProductItem product={product} key={product.id} cookieSelected={setProduct} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
