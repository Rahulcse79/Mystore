import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

function App() {

  return (
    <div>
      <div>
        <ul className="nav-ul"></ul>
      </div>
      
      <div className="container">
        <div className="category">
          <Link to="/ElectronicsProducts">Electronics</Link>
          {/* Add electronics-related content here */}
        </div>
        <div className="category">
          <Link to="/MenClothProducts">Men's Clothing</Link>
          {/* Add men's clothing-related content here */}
        </div>
        <div className="category">
          <Link to="/WomenClothProducts">Women's Clothing</Link>
          {/* Add women's clothing-related content here */}
        </div>
        <div className="category">
          <Link to="/SelectedItems">Selected Items</Link>
          {/* Add women's clothing-related content here */}
        </div>
      </div>

      <div>
        <>
          <h1 className="Footer">fake-store-app</h1>
        </>
      </div>
    </div>
  );
}

export default App;
