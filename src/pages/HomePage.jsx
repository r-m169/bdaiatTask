import React, { useEffect, useState } from 'react'
import '../styles-for-pages/homePage.css'
import Product from '../components/ProductList/Product';

const HomePage = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const apiData = await response.json();
        // console.log(response.json());

        setProducts(apiData.products);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProducts();
  }, []);
  
  return (
    <>
      <div className='Attention-grabbing'><h1> <span>Shop</span>  smarter,
        <span>not</span> harder <br /> <span>Find</span> everything
        <span> you</span> need</h1></div>
        {products && products.map(product => (
        <Product
          key={product.id}
          title={product.title}
          image={product.thumbnail}
          description={product.description}
         
        />
      ))}
    </>

  )
}

export default HomePage