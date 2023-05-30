import React from "react";
import cartIcon from "../assets/ticketIcon.png";

const CartWidget = () => {
  return (
    <div className="cart">
      <p className="cart__number">2</p>
      <img src={cartIcon} alt="" className="cart__img " />
    </div>
  );
};

export default CartWidget;
