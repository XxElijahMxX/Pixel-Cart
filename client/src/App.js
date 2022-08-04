//import react stuff
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { auth } from "./firebase";

import { useStateValue } from "./Components/StateProvider/StateProvider";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

//Import stylesheet
import "./App.css";

//Import components
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Checkout from "./Components/Checkout/checkout";
import Login from "./Components/Login/login";
import Payment from "./Components/Payment/Payment";



const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // this only runs when the app component loads in

    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>> ", authUser);

      if (authUser) {
        // the user user logged in/ the user was already logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/payment"
              element={
                <div>
                  <Header />
                  <Payment />
                </div>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route
              path="/checkout"
              element={
                <div>
                  <Header />
                  <Checkout />
                </div>
              }
            />

            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <Home />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
