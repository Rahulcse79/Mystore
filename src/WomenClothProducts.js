import React, { useEffect, useState } from 'react';
import Card from './card';

const WomenClothProducts = () => {
  const [womenClothing, setWomenClothing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const womenClothingUrl = 'https://fakestoreapi.com/products/category/women\'s clothing';

    fetch(womenClothingUrl)
      .then((res) => res.json())
      .then((data) => {
        setWomenClothing(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching women\'s clothing products');
        setLoading(false);
        console.error('Error fetching women\'s clothing products:', error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Women's Clothing</h2>
      {womenClothing.length === 0 ? (
        <p>No women's clothing products available.</p>
      ) : (
        <div className="row">
          {womenClothing.map((product) => (
            <div key={product.id} className="col-md-4">
              <Card
                title={product.title}
                Description={product.description}
                imageurl={product.image}
                price={product.price}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WomenClothProducts;
