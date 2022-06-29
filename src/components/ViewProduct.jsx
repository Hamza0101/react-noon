import React from "react";

export default function ViewProduct(product) {
  return (
    <div>
      <h4>View</h4>
      <h4>{product.name}</h4>
      <h6>{product.price}</h6>
      <h6>{product.category}</h6>
      <h6>{product.brand}</h6>
      <p>{product.desc}</p>
    </div>
  );
}
