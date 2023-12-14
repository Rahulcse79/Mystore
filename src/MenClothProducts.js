import React, { useEffect, useState } from "react";
import Card from "./card";
import { syncQuantityWithCart } from "./productSlice";
import { useSelector } from "react-redux";

const MenClothProducts = () => {
  const products = useSelector((state) => state.products.value.products);
  const cart = useSelector((state) => state.products.value.cart);
  const menClothing = products
    .filter((p) => p.category == "men's clothing")
    .map(syncQuantityWithCart(cart));

  return (
    <div>
      <h2>Men's Clothing</h2>
      <div className="row">
        {menClothing.map((product) => (
          <div key={product.id} className="col-md-4">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenClothProducts;
