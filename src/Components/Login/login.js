import React, { useState } from "react";
import "./login.css";
import Logo from "../../Images/Pixel Cart.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
<<<<<<< HEAD
        if (auth) {
          history("/");
        }
=======
        history("/");
>>>>>>> 3d5275a5c6a55390b35f56e089a01b516f3c823a
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="signInButton">
            Sign In
          </button>
        </form>
        <p>Hey, thanks for signing-in to Pixel Cart!</p>
        <p>
          Welcome to our site and we hope you find everything your looking for.
        </p>

        <button onClick={register} className="registerButton">
          Create a Pixel Cart Account
        </button>
      </div>
    </div>
  );
}

export default Login;
