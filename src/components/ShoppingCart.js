import React from "react";
import List from "./List";

function ShoppingCart(props) {
  return (
    <div className="ShoppingCart">
      <h1>Shopping Cart</h1>
      <button className="emptyButton" onClick={props.emptyCart}>
        Empty Cart
      </button>
      <List {...props} />
    </div>
  );
}

export default ShoppingCart;
