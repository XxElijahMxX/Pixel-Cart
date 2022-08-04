import React from "react";
import Product from "../Product/product";
import "./home.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

function Home({}) {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  console.log(products);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.teahub.io/photos/full/217-2178749_metroid-super.png"
          alt=""
        />

        <div className="home__row">
          {
            products.map(product => (
              <div className="productCard">
              <Product 
              id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
              review={product.review}/>
              </div>
            ) )
          }
          
          
        </div> 
      </div>
    </div>
  );
}

export default Home;
