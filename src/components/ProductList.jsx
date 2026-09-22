import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice';
import { plantsData, plantCategories } from '../data/plantsData';
import Navbar from './Navbar';
import '../styles/ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Filter state for category quick-filter tabs
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Check if a specific plant is already in the cart
  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Determine which categories to display
  const displayedCategories =
    selectedCategory === 'All'
      ? plantCategories
      : plantCategories.filter((cat) => cat === selectedCategory);

  return (
    <div className="product-list-page">
      {/* Navigation Bar */}
      <Navbar />

      <main className="product-list-main">
        {/* Page Header */}
        <section className="catalog-header">
          <span className="catalog-badge">Nursery Catalog</span>
          <h1 className="catalog-title">Explore Our Plants</h1>
          <p className="catalog-subtitle">
            Carefully curated, sustainably nurtured houseplants to bring fresh air,
            vibrant color, and tranquility to your home and office.
          </p>

          {/* Category Filter Pills */}
          <div className="category-filter-pills">
            <button
              className={`filter-pill ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Plants ({plantsData.length})
            </button>
            {plantCategories.map((category) => {
              const count = plantsData.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories and Products */}
        <div className="categories-container">
          {displayedCategories.map((category) => {
            const categoryPlants = plantsData.filter(
              (plant) => plant.category === category
            );

            return (
              <section key={category} className="category-section">
                <div className="category-header">
                  <div className="category-heading-wrap">
                    <h2 className="category-heading">{category}</h2>
                    <span className="category-count">
                      {categoryPlants.length} Varieties Available
                    </span>
                  </div>
                  <div className="category-divider"></div>
                </div>

                {/* Plants Grid: Minimum 6 plants per category */}
                <div className="plants-grid">
                  {categoryPlants.map((plant) => {
                    const inCart = isPlantInCart(plant.id);

                    return (
                      <div key={plant.id} className="plant-card">
                        <div className="plant-image-wrapper">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-image"
                            loading="lazy"
                            onError={(e) => {
                              // Reliable botanical SVG fallback if offline or network issue
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                          <span className="plant-category-tag">
                            {plant.category.split(' ')[0]}
                          </span>
                        </div>

                        <div className="plant-info">
                          <div className="plant-header">
                            <h3 className="plant-name">{plant.name}</h3>
                            <span className="plant-price">
                              ${plant.price.toFixed(2)}
                            </span>
                          </div>

                          <p className="plant-description">
                            {plant.description}
                          </p>

                          {/* Add to Cart button */}
                          <button
                            className={`btn-add-to-cart ${inCart ? 'disabled' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={inCart}
                            aria-label={
                              inCart
                                ? `${plant.name} added to cart`
                                : `Add ${plant.name} to cart for $${plant.price.toFixed(2)}`
                            }
                          >
                            {inCart ? (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>Added to Cart</span>
                              </>
                            ) : (
                              <>
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
                                  <line x1="12" y1="5" x2="12" y2="19" />
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                <span>Add to Cart</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
