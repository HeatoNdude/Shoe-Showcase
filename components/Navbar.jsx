import React from "react";
import Link from "next/link";
// import logo from '../public/kicksthetic.png';
import { useState, useEffect } from 'react';
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

import { Cart } from "./";
// import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".dropdown")) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const dropdownRef = React.createRef();

  const logo = "kicksthetic.png";

  return (
    <div className="navbar-container">
      <p className="logo">
        <img
          src={logo}
          alt="logo"
          height="50"
          width="50"
        />
        <Link href="/">Kicksthetic</Link>
      </p>
      <div className="dropdown">
        <button type="button" className="drp-men" onClick={handleClick}>
          <h6>Menu</h6>
        </button>

        {isOpen && (
          <div className="dropdown-content">
            <a href="#">Home</a>
            <a href="#">Showcase</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        )}
      </div>
      <div className="icons">
        <button type="button" className="search-icon" onClick="">
          <h6>Home</h6>
        </button>

        <button type="button" className="user-icon" onClick="">
          <h6>Showcase</h6>
        </button>

        <button type="button" className="cart-icon" onClick="">
          <h6>About Us</h6>
        </button>

        <button type="button" className="contact-icon" onClick="">
          <h6>Contact Us</h6>
        </button>
      </div>

      

      {/* {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
