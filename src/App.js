import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ElectronicsProducts from './ElectronicsProducts';
import MenClothProducts from './MenClothProducts';
import WomenClothProducts from './WomenClothProducts';
import SelectedItems from './SelectedItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WomenClothProducts" element={<WomenClothProducts />} />
          <Route path="/MenClothProducts" element={<MenClothProducts />} />
          <Route path="/ElectronicsProducts" element={<ElectronicsProducts />} />
          <Route path="/SelectedItems" element={<SelectedItems />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
