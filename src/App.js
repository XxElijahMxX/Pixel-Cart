import "./App.css";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/checkout";
import Login from "./Components/Login/login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // this only runs when the app component loads in

    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>> ", authUser);

      if (authUser) {
        // the user user logged in/ the user was already logged in
      } else {
        // the user was logged out
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
