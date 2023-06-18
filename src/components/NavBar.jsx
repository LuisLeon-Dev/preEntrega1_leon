import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/" className="navBar__logo">
        <Icon icon="clarity:cd-dvd-line" color="white" width="50" height="50" />
        <h2>Slinky Store</h2>
      </Link>

      {/* <img src={logo} alt="logo de la marca" className="navBar__logo" /> */}
      <ul className="navBar__options">
        <li>
          <Link to="/category/men's clothing">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/category/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
