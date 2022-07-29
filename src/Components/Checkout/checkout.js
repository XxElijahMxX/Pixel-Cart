import React from "react";
import "./checkout.css";
import banner from "../../Images/Pixel Cart.png";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://via.placeholder.com/1920x100?text=Banner+Ad+Placeholder"
          alt="banner ad"
        />
        <div className="checkout_title">
          <h2> Your Shopping Basket</h2>
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>

      <div className="checkout_right">
        <h2> Subtotal Will Go Here</h2>
      </div>
    </div>
  );
}

export default Checkout;
