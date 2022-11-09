import React from "react";

function CheckoutItem(items) {
  return (
    <div className="cartViewContainers cartViewContainersCheckout">
      <div
        className="cartViewImg"
        style={{ backgroundImage: `url(${items.img})` }}
      ></div>
      <div className="cartViewText">
        <h3>{items.name}</h3>
        <h4>$ {items.price}/u</h4>
      </div>
    </div>
  );
}

export default CheckoutItem;
