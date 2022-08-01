import React from "react";
import Product from "../Product/product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.teahub.io/photos/full/217-2178749_metroid-super.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="01"
            title="Nintendo 64"
            price={99.99}
            image="https://m.media-amazon.com/images/I/61j0V37zKcL._SL1500_.jpg"
            review={5}
          />
          <Product
            id="02"
            title="Gameboy Color"
            price={64.99}
            image="https://www.lukiegames.com/assets/images/GBC/GBC_SYSTEM_GRAPE.jpg"
            review={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="03"
            title="Playstation 1"
            price={29.99}
            image="https://i.ebayimg.com/images/g/98UAAOSw~2hbu2XY/s-l500.jpg"
            review={3}
          />
          <Product
            id="04"
            title="Playstation 2 (Fat Model)"
            price={69.99}
            image="https://i5.walmartimages.com/asr/e01f8af1-3b53-4cb9-8829-35d31143b724_1.ee2de9c932edbd09bb9c59014d995a6f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            review={5}
          />
          <Product
            id="05"
            title="Playstation 2 (Slim Model)"
            price={39.99}
            image="https://i5.walmartimages.com/asr/dbaccc62-1405-45c3-a9e0-82eee8b1039d_1.ccbb04536b1daeab75e8248b0a1ac1e6.jpeg"
            review={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="06"
            title="Nintendo Gamecube"
            price={99.99}
            image="https://upload.wikimedia.org/wikipedia/commons/d/d1/GameCube-Set.jpg"
            review={5}
          />
          <Product
            id="07"
            title="Xbox"
            price={59.99}
            image="https://m.media-amazon.com/images/I/41oALMHapnL.jpg"
            review={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
