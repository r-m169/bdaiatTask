import React, { useEffect, useState } from 'react';
import '../styles-for-pages/homePage.css';
import Product from '../components/ProductList/Product';
import CartPage from './CartPage'; 
import { useCart } from '../context/cartContext';

const HomePage = ({ isDarkMode }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { addToCart } = useCart();

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

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  return (
    <>
      <div className='Attention-grabbing'>
        <h1>
          <span>Shop</span> smarter,
          <span>not</span> harder <br />
          <span>Find</span> everything
          <span> you</span> need
        </h1>
      </div>
      <div className="productsPart">
        {products && products.map(product => (
          <Product
            key={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            description={product.description}
            isDarkMode={isDarkMode}
            addToCart={() => addToCart(product)} 
          />
        ))}
      </div>
      {/* <CartPage cartItems={cartItems} /> */}
    </>
  );
}

export default HomePage;
