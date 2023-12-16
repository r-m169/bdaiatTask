import React from 'react'
import './product.css'

const Products = ({title , thumbnail , description }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
  <img src={thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Add To Cart</a>
  </div>
</div>
  )
}

export default Products