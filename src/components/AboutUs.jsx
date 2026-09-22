import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <span className="about-badge">Our Story</span>
          <h1 className="about-title">Welcome to Paradise Nursery</h1>
          <p className="about-lead">
            Where Green Meets Serenity. We are an online plant nursery dedicated to
            cultivating wellness, purifying air, and reconnecting spaces with the calming beauty of nature.
          </p>
        </section>

        {/* Mission Statement Box */}
        <section className="about-mission-card">
          <div className="mission-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v8" />
              <path d="m4.93 10.93 1.41 1.41" />
              <path d="M2 18h2" />
              <path d="M20 18h2" />
              <path d="m19.07 10.93-1.41 1.41" />
              <path d="M22 22H2" />
              <path d="m16 6-4 4-4-4" />
              <path d="M16 18a4 4 0 0 0-8 0" />
            </svg>
          </div>
          <div className="mission-content">
            <h2>Our Mission & Purpose</h2>
            <p>
              Paradise Nursery is an online plant store dedicated to bringing beautiful
              and healthy plants to homes and workspaces. We provide a variety of indoor
              and outdoor plants while making plant shopping simple and convenient.
            </p>
            <p>
              We believe that living with houseplants enriches everyday life, reduces mental stress,
              improves air quality, and transforms everyday rooms into thriving, serene sanctuaries.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="about-values-section">
          <h2 className="section-title">Why Plant Lovers Choose Us</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c0-4 1.5-7 4-9" />
                  <path d="M9 13c-1.5-2.5-1-5.5 1-8 2.5 1 4 3.5 3 6" />
                  <path d="M14 11c1.5-2 3-3 5-3-1 3-2.5 4.5-5 5" />
                </svg>
              </div>
              <h3>Nursery-Grown Quality</h3>
              <p>
                Every plant is nurtured from root to tip by passionate horticulturalists
                under optimal climate conditions before arriving safely at your door.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Guaranteed Healthy Delivery</h3>
              <p>
                Our custom eco-friendly packaging cradles every pot securely to ensure
                your plants arrive fresh, lush, undamaged, and ready to thrive.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <h3>Expert Plant Care Support</h3>
              <p>
                We include detailed care instructions with every order and provide lifetime
                guidance on watering, lighting, and plant wellness.
              </p>
            </div>
          </div>
        </section>

        {/* CTA to Catalog */}
        <section className="about-cta-section">
          <h2>Ready to bring nature home?</h2>
          <p>Explore our carefully nurtured collection of air-purifying, aromatic, and succulent plants.</p>
          <Link to="/plants" className="btn-about-browse">
            Browse Our Plants
          </Link>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
