import React from "react";
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, image, price, review }) {
  const [{ basket }, dispatch] = useStateValue();

  //Can remove, logs basket contents to console
  console.log("Basket contents:", basket);

  const addToBasket = () => {
    //put item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        review: review,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__review">
          {Array(review)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}> Add to cart</button>
    </div>
  );
}

export default Product;
