import React, { useEffect, useState } from 'react';
import Card from './card'; 

const MenClothProducts = () => {
  const [menClothing, setMenClothing] = useState([]);

  useEffect(() => {
    // Define the API endpoint for men's clothing
    const menClothingUrl = 'https://fakestoreapi.com/products/category/men\'s clothing';

    // Fetch men's clothing products
    fetch(menClothingUrl)
      .then((res) => res.json())
      .then((data) => setMenClothing(data))
      .catch((error) => console.error('Error fetching men\'s clothing products:', error));
  }, []);

  return (
    <div>
      <h2>Men's Clothing</h2>
      <div className="row">
        {menClothing.map((product) => (
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
    </div>
  );
};

export default MenClothProducts;
