import React from "react";
import { Icon } from "@iconify/react";

const CartWidget = () => {
  return (
    <div className="cart">
      <p className="cart__number">2</p>
      <Icon
        icon="material-symbols:shopping-cart-outline"
        color="white"
        className="cart__img"
      />
    </div>
  );
};

export default CartWidget;
