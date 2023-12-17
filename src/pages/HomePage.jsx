import React, { useEffect, useState } from 'react';
import '../styles-for-pages/homePage.css';
import Product from '../components/ProductList/Product';
import { useCart } from '../context/cartContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/languageSwitcher/LanguageSwitcher'; // Import the LanguageSwitcher component

const HomePage = ({ isDarkMode }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const apiData = await response.json();

        setProducts(apiData.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className='Attention-grabbing'>
        <h1>
        <span>{t('Shop')}</span> {t('smarter')},
          <span>{t('not')}</span> {t('harder')} <br />
          <span>{t('Find')}</span> {t('everything')}
          <span>{t('you')}</span> {t('need')}
        </h1>
      </div>
      <div>
        <LanguageSwitcher /> 
      </div>
      <div className="productsPart">
        {products && products.map(product => (
          <Product
          key={product.id}
          title={t(product.title)}
          productId={product.id}
          thumbnail={product.thumbnail}
          description={t(product.description)}
          isDarkMode={isDarkMode}
          addToCart={() => addToCart(product)}
        />
        
        ))}
      </div>
    </>
  );
};

export default HomePage;
