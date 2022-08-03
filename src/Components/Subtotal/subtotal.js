import React from "react";
import "./subtotal.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router";

function Subtotal() {
<<<<<<< HEAD
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
=======
  const [{ basket }] = useStateValue();
>>>>>>> 3d5275a5c6a55390b35f56e089a01b516f3c823a

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items){" "}
        <strong>${getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => history("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
