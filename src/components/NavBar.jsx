import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <img src={logo} alt="logo de la marca" className="navBar__logo" />
      <ul className="navBar__options">
        <li>
          <a href="#">Proximos estrenos</a>
        </li>
        <li>
          <a href="#">Cinepolis VIP</a>
        </li>
        <li>
          <a href="#">Club Cinepolis</a>
        </li>
        <li>
          <a href="#">Cinepolis Jr.</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
