import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productSlice, { addProductToCart } from "./productSlice";

function Card({ product }) {
  const { title, description, image, price, quantity } = product;
  const [qty, setQuantity] = useState(quantity);
  const dispatch = useDispatch(productSlice);
  const handleAddToCart = () => {
    dispatch(addProductToCart({ id: product.id, qty: qty }));
  };
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">{description}</p>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={qty}
              onChange={(ev) => {
                setQuantity(parseInt(ev.target.value));
              }}
              min="1"
            />
          </div>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;