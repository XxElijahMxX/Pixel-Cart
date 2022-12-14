import React from "react";
import "./subtotal.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useNavigate();
  const subtotal = getBasketTotal(basket);
  
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items){" "}
        <strong>${subtotal.toFixed(2)}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => history("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
