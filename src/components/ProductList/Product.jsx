import React from 'react';
import './product.css';
import { useTranslation } from 'react-i18next';
import translations from '../../locales/es.json';
import translationE from '../../locales/en.json';

const translateProductInfo = (productId, language) => {
  let translatedTitle, translatedDescription;

  if (language === 'es') {
    translatedTitle = translations.title[productId];
    translatedDescription = translations.description[productId];
  } else {
    translatedTitle = translationE.title[productId];
    translatedDescription = translationE.description[productId];
  }

  return {
    translatedTitle,
    translatedDescription,
  };
};

const Product = ({ productId, thumbnail, isDarkMode, addToCart }) => {
  const { t, i18n } = useTranslation();

  const language = i18n.language || 'en'; 

  const { translatedTitle, translatedDescription } = translateProductInfo(productId, language);

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="imageContainer">
        <img src={thumbnail} className="card-img-top" alt="..." />
      </div>
      <div className="card-body content">
        <h5 className="card-title">{translatedTitle}</h5>
        <p className="card-text">{translatedDescription}</p>
        <div className='btn-container'>
          <button onClick={addToCart} className="d-flex flex-row justify-content-center btn-addToCart">
            {t('Add To Cart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
