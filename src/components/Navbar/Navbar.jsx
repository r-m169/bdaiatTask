import React from 'react'
import './navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg  p-4  ">
        <div className="container-fluid">
          <Link className="navbar websiteName" to="/" >Bonelle</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse burger-menu" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><FontAwesomeIcon icon={faHouse} className='icons' /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <div>
                  <FontAwesomeIcon icon={faCartShopping} className="icons" />
                  <span className='badge '>0</span>
                  </div>
                </Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#" >
                  <FontAwesomeIcon icon={faUser} className='icons' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar