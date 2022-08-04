import React from "react";
import "./checkout.css";
// import banner from "../../Images/Pixel Cart.png";
import Subtotal from "../Subtotal/subtotal";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://www.relativisticramblings.com/wp-content/uploads/2016/07/1370965449-the-legend-of-zelda-the-wind-waker-hd-e1468358036334.jpg"
          alt="banner ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
        </div>
        <div className="checkout_title">
          <h2> Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              review={item.review}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
