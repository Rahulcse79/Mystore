import React, { Component } from 'react';
import { useCart } from './CartContext';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleAddToCart = () => {
    const { title, price, filename } = this.props;
    const { quantity } = this.state;
    const { addToCart } = useCart();

    addToCart({
      title,
      price,
      quantity,
      filename,
    });
  };

  render() {
    const { title, description, imageurl, price } = this.props;
    const { quantity } = this.state;

    return (
      <div className="card-container">
        <div className="card">
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Price: ${price}</p>
            <p className="card-text">{description}</p>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={this.handleQuantityChange}
                min="1"
              />
            </div>
            <button className="btn btn-primary" onClick={this.handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
