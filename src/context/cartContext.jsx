import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  
    const filteredCartItems = updatedCartItems.filter(
      (item) => !(item.id === productId && item.quantity === 1)
    );
  
    setCartItems(filteredCartItems);
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider 
      value={{
        cartItems,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
