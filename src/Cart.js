import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.products.value.cart);
  return (
    <div>
      {items && items.length ? (
        <div>
          <h2>Selected Items</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                Title = {item.title} <br/> PricePerItem = ${item.price}  <br/>Quantity = {item.quantity}
                <br/><br/>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>NULL Item</p>
      )}
    </div>
  );
};

export default Cart;
