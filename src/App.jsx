import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import './styles/App.css';

/**
 * LandingPage Component
 * Fulfills TASK 3 (Background Image Implementation) and TASK 4 (Landing Page Requirements)
 */
const LandingPage = () => {
  const navigate = useNavigate();

  // Task 3: Background image styling implemented directly in App.jsx
  // Uses a lush greenhouse nursery photograph with a botanical fallback
  const landingBackgroundStyle = {
    backgroundImage: `linear-gradient(rgba(10, 30, 20, 0.72), rgba(10, 30, 20, 0.82)), url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80'), url('/images/landing-bg.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem 1.5rem',
    position: 'relative'
  };

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="landing-container" style={landingBackgroundStyle}>
      <div className="landing-overlay-card">
        {/* Plant Nursery Logo / Icon */}
        <div className="landing-logo-badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
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

        {/* Task 4: Company Name */}
        <h1 className="landing-title">Paradise Nursery</h1>

        <p className="landing-tagline">Where Green Meets Serenity</p>

        {/* Task 4: Company Short Description */}
        <p className="landing-description">
          Bring nature home with beautiful plants for every space. We provide a curated
          variety of indoor air-purifying plants, aromatic blooms, and low-maintenance
          succulents delivered fresh from our nursery to your doorstep.
        </p>

        {/* Features Highlights */}
        <div className="landing-features">
          <div className="landing-feature-item">
            <span>🌿</span> 100% Healthy Guarantee
          </div>
          <div className="landing-feature-item">
            <span>🚚</span> Free Nursery Delivery
          </div>
          <div className="landing-feature-item">
            <span>🪴</span> Eco-Friendly Pots
          </div>
        </div>

        {/* Task 4: Functional Get Started Button */}
        <button
          className="btn-get-started"
          onClick={handleGetStarted}
          aria-label="Get Started and browse plants"
        >
          <span>Get Started</span>
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
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
};

/**
 * Main App Component with Route Definitions
 */
const App = () => {
  return (
    <Routes>
      {/* Route 1: Landing Page (Task 3 & 4) */}
      <Route path="/" element={<LandingPage />} />

      {/* Route 2: Product Listing Page (Task 6) */}
      <Route path="/plants" element={<ProductList />} />

      {/* Route 3: Shopping Cart Page (Task 7) */}
      <Route path="/cart" element={<Cart />} />

      {/* Route 4: About Us Page (Task 2) */}
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
