import React, { useEffect, useState } from 'react';
import Card from './card';

const ElectronicsProducts = () => {
  const [electronics, setElectronics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const electronicsUrl = 'https://fakestoreapi.com/products/category/electronics';

    fetch(electronicsUrl)
      .then((res) => res.json())
      .then((data) => {
        setElectronics(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching electronics products');
        setLoading(false);
        console.error('Error fetching electronics products:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { title: product.title, price: product.price }]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Electronics</h2>
      {electronics.length === 0 ? (
        <p>No electronics products available.</p>
      ) : (
        <div className="row">
          {electronics.map((product) => (
            <div key={product.id} className="col-md-4">
              <Card
                title={product.title}
                description={product.description}  
                imageurl={product.image}
                price={product.price}
                onAddToCart={() => addToCart(product)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Display the shopping cart */}
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ElectronicsProducts;
