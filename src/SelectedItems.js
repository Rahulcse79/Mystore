import React from 'react';

const SelectedItems = ({ items }) => {
  return (
    <div>
      {items && items.length ? (
        <div>
          <h2>Selected Items</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.title} - ${item.price}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>NULL Item</p>
      )}
    </div>
  );
};

export default SelectedItems;
