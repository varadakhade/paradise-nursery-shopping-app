import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';
import '../styles/Navbar.css';

const Navbar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 20h10" />
              <path d="M10 20c0-4 1.5-7 4-9" />
              <path d="M9 13c-1.5-2.5-1-5.5 1-8 2.5 1 4 3.5 3 6" />
              <path d="M14 11c1.5-2 3-3 5-3-1 3-2.5 4.5-5 5" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-tagline">Where Green Meets Serenity</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/plants"
            className={`nav-link ${isActive('/plants') ? 'active' : ''}`}
          >
            Plants
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className={`nav-link cart-link ${isActive('/cart') ? 'active' : ''}`}
            aria-label={`Shopping cart with ${totalQuantity} items`}
          >
            <span className="cart-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </span>
            <span className="cart-text">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
