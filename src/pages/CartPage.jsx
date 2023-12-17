import React from 'react';
import { useCart } from '../context/cartContext';
import '../styles-for-pages/cart.css';

const CartPage = () => {
  const { cartItems, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
    useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      {cartItems && cartItems.length > 0 ? (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-image">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="item-price">
                  <p>Price: ${item.price * item.quantity}</p>
                </div>
                <div className="item-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)}>
                    Remove Item
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      ) : (
        <p className='empty-statement'>Your cart is empty</p>
      )}
    </div>
  );
      }  
export default CartPage;
