import React from "react";
import "./header.css";
import Logo from "../../Images/Pixel Cart.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="this the logo" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span
            className="header__optionLineTwo 
          header__cartCount"
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;