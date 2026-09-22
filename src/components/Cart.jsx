import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart
} from '../redux/CartSlice';
import Navbar from './Navbar';
import '../styles/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  const [checkoutMessage, setCheckoutMessage] = useState(false);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setCheckoutMessage(true);
    // Auto-dismiss checkout alert after 5 seconds
    setTimeout(() => {
      setCheckoutMessage(false);
    }, 5000);
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-main">
        {/* Checkout Modal / Toast Notice */}
        {checkoutMessage && (
          <div className="checkout-alert-overlay" onClick={() => setCheckoutMessage(false)}>
            <div className="checkout-alert-box" onClick={(e) => e.stopPropagation()}>
              <div className="checkout-alert-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="checkout-alert-title">Coming Soon!</h3>
              <p className="checkout-alert-text">
                Online payment and checkout functionality is currently in development.
                Thank you for choosing Paradise Nursery!
              </p>
              <button
                className="checkout-alert-btn"
                onClick={() => setCheckoutMessage(false)}
              >
                Got It
              </button>
            </div>
          </div>
        )}

        <div className="cart-header-section">
          <h1 className="cart-title">Your Shopping Cart</h1>
          <p className="cart-subtitle">
            Review your selected houseplants, manage quantities, and proceed to checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart-state">
            <div className="empty-cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h2>Your cart is currently empty</h2>
            <p>Looks like you haven't added any beautiful greenery yet.</p>
            <button
              className="btn-continue-shopping-large"
              onClick={handleContinueShopping}
            >
              Browse Plants Catalog
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Cart Items List */}
            <div className="cart-items-column">
              <div className="cart-items-header">
                <span className="items-count-badge">
                  {totalQuantity} {totalQuantity === 1 ? 'Plant' : 'Plants'} in Cart
                </span>
                <button
                  className="btn-clear-cart"
                  onClick={() => dispatch(clearCart())}
                  title="Remove all plants from cart"
                >
                  Clear Cart
                </button>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => {
                  const itemTotal = item.price * item.quantity;

                  return (
                    <div key={item.id} className="cart-item-card">
                      {/* Thumbnail Image */}
                      <div className="cart-item-image-wrap">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src =
                              'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                      </div>

                      {/* Plant Details */}
                      <div className="cart-item-details">
                        <div className="cart-item-info">
                          <h3 className="cart-item-name">{item.name}</h3>
                          <span className="cart-item-category">
                            {item.category}
                          </span>
                          <span className="cart-item-unit-price">
                            Unit Price: <strong>${item.price.toFixed(2)}</strong>
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="cart-item-actions">
                          <div className="quantity-control-group">
                            <button
                              className="qty-btn decrement"
                              onClick={() => handleDecrease(item.id)}
                              disabled={item.quantity <= 1}
                              aria-label={`Decrease quantity of ${item.name}`}
                              title={
                                item.quantity <= 1
                                  ? 'Minimum quantity reached'
                                  : 'Decrease quantity'
                              }
                            >
                              -
                            </button>
                            <span className="qty-value" aria-label={`Quantity: ${item.quantity}`}>
                              {item.quantity}
                            </span>
                            <button
                              className="qty-btn increment"
                              onClick={() => handleIncrease(item.id)}
                              aria-label={`Increase quantity of ${item.name}`}
                              title="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          {/* Dynamic Item Total */}
                          <div className="cart-item-total-wrap">
                            <span className="item-total-label">Subtotal:</span>
                            <span className="item-total-value">
                              ${itemTotal.toFixed(2)}
                            </span>
                          </div>

                          {/* Remove Button */}
                          <button
                            className="btn-remove-item"
                            onClick={() => handleRemove(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            title="Remove item"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cart Summary & Actions Column */}
            <div className="cart-summary-column">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-rows">
                  <div className="summary-row">
                    <span>Total Items:</span>
                    <strong>{totalQuantity}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Shipping:</span>
                    <span className="free-shipping-tag">FREE</span>
                  </div>
                  <div className="summary-row">
                    <span>Plant Care Guarantee:</span>
                    <span className="free-shipping-tag">INCLUDED</span>
                  </div>
                  <div className="summary-divider"></div>
                  {/* Dynamic Total Cart Amount */}
                  <div className="summary-row total-row">
                    <span>Total Amount:</span>
                    <span className="cart-total-price">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="cart-action-buttons">
                  {/* Checkout Button */}
                  <button
                    className="btn-checkout"
                    onClick={handleCheckout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    <span>Checkout</span>
                  </button>

                  {/* Continue Shopping Button */}
                  <button
                    className="btn-continue-shopping"
                    onClick={handleContinueShopping}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Continue Shopping</span>
                  </button>
                </div>

                <div className="summary-guarantee">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>30-Day Healthy Plant Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
