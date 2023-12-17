import React from 'react';
import './product.css';

const Product = ({ title, thumbnail, description, isDarkMode, addToCart }) => {
  const cardStyles = {
    width: '18rem',
    backgroundColor: isDarkMode ? '#212529' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
  };

  const cardBodyStyles = {
    backgroundColor: isDarkMode ? '#212529' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
  };

  return (
    <div className="card" style={cardStyles}>
      <div className="imageContainer">
        <img src={thumbnail} className="card-img-top" alt="..." />
      </div>
      <div className="card-body content" style={cardBodyStyles}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className='btn-container'>
          <button onClick={addToCart} className="d-flex flex-row justify-content-center  btn-addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
