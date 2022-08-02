import React from "react";
import "./login.css";
import Logo from "../../Images/Pixel Cart.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="signInButton">Sign In</button>
        </form>
        <p>Hey, thanks for signing-in to Pixel Cart!</p>
        <p>
          Welcome to our site and we hope you find everything your looking for.
        </p>

        <button>Create a Pixel Cart Account</button>
      </div>
    </div>
  );
}

export default Login;
