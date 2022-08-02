import React from "react";
import "./checkout.css";
// import banner from "../../Images/Pixel Cart.png";
import Subtotal from "../Subtotal/subtotal";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { InsertEmoticon } from "@mui/icons-material";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://via.placeholder.com/1920x100?text=Banner+Ad+Placeholder"
          alt="banner ad"
        />
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
