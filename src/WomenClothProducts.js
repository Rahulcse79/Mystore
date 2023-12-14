import React, { useEffect, useState } from "react";
import Card from "./card";
import { syncQuantityWithCart } from "./productSlice";
import { useSelector } from "react-redux";

const WomenClothProducts = () => {
  const products = useSelector((state) => state.products.value.products);
  const cart = useSelector((state) => state.products.value.cart);
  const womenClothing = products
    .filter((p) => p.category == "women's clothing")
    .map(syncQuantityWithCart(cart));

  return (
    <div>
      <h2>Women's Clothing</h2>
      {womenClothing.length === 0 ? (
        <p>No women's clothing products available.</p>
      ) : (
        <div className="row">
          {womenClothing.map((product) => (
            <div key={product.id} className="col-md-4">
              <Card product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WomenClothProducts;
