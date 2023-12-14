import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ElectronicsProducts from "./ElectronicsProducts";
import MenClothProducts from "./MenClothProducts";
import WomenClothProducts from "./WomenClothProducts";
import Cart from "./Cart";

function App() {
  const [selected, setSelected] = useState(null);
  const renderComponent = (() => {
    switch (selected) {
      case "electronics":
        return <ElectronicsProducts />;
        break;
      case "men_clothing":
        return <MenClothProducts />;
        break;
      case "women_clothing":
        return <WomenClothProducts />;
        break;
      case "cart":
        return <Cart />;
        break;
      default:
        return <></>;
    }
  })();
  return (
    <div>
      <div>
        <ul className="nav-ul"></ul>
      </div>

      <div className="container">
        <div className="category">
          <div onClick={(_) => setSelected("electronics")}>Electronics</div>
        </div>
        <div className="category">
          <div onClick={(_) => setSelected("men_clothing")}>Men's Clothing</div>
        </div>
        <div className="category">
          <div onClick={(_) => setSelected("women_clothing")}>
            Women's Clothing
          </div>
        </div>
        <div className="category">
          <div onClick={(_) => setSelected("cart")}>Selected Items</div>
        </div>
      </div>
      <div>{renderComponent}</div>
      <div>
        <>
          <h1 className="Footer">fake-store-app</h1>
        </>
      </div>
    </div>
  );
}

export default App;
