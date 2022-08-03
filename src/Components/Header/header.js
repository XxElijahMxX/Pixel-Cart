import React from "react";
import "./header.css";
import Logo from "../../Images/Pixel Cart.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="this the logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
<<<<<<< HEAD
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
=======
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
>>>>>>> 3d5275a5c6a55390b35f56e089a01b516f3c823a
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header_optionBasket">
          <Link to="/checkout">
            <ShoppingCartIcon />
          </Link>
          <span
            className="header__optionLineTwo 
          header__cartCount"
          >
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
