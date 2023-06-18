import React from "react";
// import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__logo">
        <Icon icon="clarity:cd-dvd-line" color="white" width="50" height="50" />
        <h2>Slinky Store</h2>
      </div>
      {/* <img src={logo} alt="logo de la marca" className="navBar__logo" /> */}
      <ul className="navBar__options">
        <li>
          <a href="#">Men's Clothing</a>
        </li>
        <li>
          <a href="#">Jewelery</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
