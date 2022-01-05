
import React from "react";
const ProductItem = ({product,cookieSelected}) => {
  

  return (
    <div className="productWrapper" onClick={()=>cookieSelected(product)}>
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
