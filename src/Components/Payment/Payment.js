import React from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="paymentContainer">
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>123 Test Lane</p>
            <p>Indianpolis, IN</p>
          </div>
        </div>
        <div className="paymentSection"></div>
        <div className="paymentSection"></div>
      </div>
    </div>
  );
}

export default Payment;
