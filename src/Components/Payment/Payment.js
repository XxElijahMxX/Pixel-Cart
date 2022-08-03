import React from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>123 Test Lane</p>
            <p>Indianapolis, IN</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="paymentItems">
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
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          {/* Stripe Stuff */}
        </div>
      </div>
    </div>
  );
}

export default Payment;
