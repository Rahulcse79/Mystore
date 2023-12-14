import React, { useEffect, useState } from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import productSlice, {
  addProductToCart,
  syncQuantityWithCart,
} from "./productSlice";

const ElectronicsProducts = () => {
  const products = useSelector((state) => state.products.value.products);
  const cart = useSelector((state) => state.products.value.cart);
  const electronics = products
    .filter((p) => p.category == "electronics")
    .map(syncQuantityWithCart(cart));

  return (
    <div>
      <h2>Electronics</h2>
      {electronics.length === 0 ? (
        <p>No electronics products available.</p>
      ) : (
        <div className="row">
          {electronics.map((product) => (
            <div key={product.id} className="col-md-4">
              <Card product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ElectronicsProducts;
