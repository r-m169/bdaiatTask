import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faLanguage,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { cartItems } = useCart();

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid  p-5 ">
          <Link className="navbar websiteName" to="/" >
            Bonelle
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse burger-menu"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto gap-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" data-is-dark-mode={isDarkMode}>
                  <FontAwesomeIcon icon={faHouse} className="icons" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <div>
                    <FontAwesomeIcon icon={faCartShopping} className="icons" />
                    <span className="badge ">{cartItems.length}</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#">
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="icons"
                    onClick={toggleDarkMode}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#"  >
                <FontAwesomeIcon icon={faLanguage} className="icons" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
