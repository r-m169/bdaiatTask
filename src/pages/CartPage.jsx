import React from 'react';
import { useCart } from '../context/cartContext';
import '../styles-for-pages/cart.css';
import { useTranslation } from 'react-i18next';
import translations from '../locales/es.json';
import translationE from '../locales/en.json';

const translateCartItem = (item, language) => {
  let translatedTitle, translatedDescription;

  if (language === 'es') {
    translatedTitle = translations.title[item.id];
    translatedDescription = translations.description[item.id];
  } else {
    translatedTitle = translationE.title[item.id];
    translatedDescription = translationE.description[item.id];
  }

  return {
    ...item,
    translatedTitle,
    translatedDescription,
  };
};

const CartPage = () => {
  const { t, i18n } = useTranslation();
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
            {cartItems.map((item, index) => {
              const translatedItem = translateCartItem(item, i18n.language || 'en');

              return (
                <li key={index} className="cart-item">
                  <div className="item-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{translatedItem.translatedTitle}</h3>
                    <p>{translatedItem.translatedDescription}</p>
                  </div>
                  <div className="item-price">
                    <p>{t('Price')}: ${item.price * item.quantity}</p>
                  </div>
                  <div className="item-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => removeItem(item.id)}>
                      {t('Remove Item')}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="total-price">{t('Total Price')}: ${calculateTotalPrice()}</p>
          <button className="clear-cart" onClick={clearCart}>
            {t('Clear Cart')}
          </button>
        </>
      ) : (
        <p className='empty-statement'>{t('Your cart is empty')}</p>
      )}
    </div>
  );
};

export default CartPage;
