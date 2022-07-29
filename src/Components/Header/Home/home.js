import React from "react";
import Product from "../Product/product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.imgur.com/PJhhd8K.jpg"
          alt=""
        />

        <div className="home__row">
          <Product />
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
