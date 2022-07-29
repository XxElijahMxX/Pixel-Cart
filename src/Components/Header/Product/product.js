import React from "react";
import "./product.css";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Nintendo 64</p>
        <p className="product__price">
          <small>$</small>
          <strong>99.99</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
