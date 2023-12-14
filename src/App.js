import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ElectronicsProducts from "./ElectronicsProducts";
import MenClothProducts from "./MenClothProducts";
import WomenClothProducts from "./WomenClothProducts";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { addProducts } from "./productSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProducts(data));
      })
      .catch((error) => {
        console.error("Error fetching electronics products:", error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WomenClothProducts" element={<WomenClothProducts />} />
          <Route path="/MenClothProducts" element={<MenClothProducts />} />
          <Route
            path="/ElectronicsProducts"
            element={<ElectronicsProducts />}
          />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
