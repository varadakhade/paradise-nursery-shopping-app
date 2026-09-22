# Paradise Nursery Shopping Application

A modern, responsive, and feature-complete e-commerce plant shopping web application developed for **Paradise Nursery** using React, Redux Toolkit, and React Router.

---

## Project Description

A React-based online plant shopping application for Paradise Nursery. Paradise Nursery is an online plant store dedicated to bringing beautiful and healthy plants to homes and workspaces. We provide a curated variety of indoor air-purifying plants, aromatic flowering plants, and low-maintenance succulents while making plant shopping simple, pleasant, and convenient.

---

## Features

- **Browse plants**: Discover an extensive selection of nursery-grown houseplants with rich descriptions and care benefits.
- **Browse plants by category**: Seamlessly navigate through organized botanical categories with live filter pills and section dividers.
- **View plant thumbnails, names and prices**: Every plant is showcased with high-quality imagery, botanical title, unit price, and descriptions.
- **Add plants to cart**: Easily add plants to your shopping cart with one click.
- **Dynamic button state**: The "Add to Cart" button automatically transitions to "Added to Cart" and becomes disabled to prevent duplicate clicks from the catalog.
- **Manage quantities**: Increase and decrease individual item quantities directly within the shopping cart.
- **Remove products**: Remove items from the shopping cart with one click using the delete button.
- **Automatically calculate cart totals**: Dynamic real-time calculation of per-plant subtotals and the overall cart total amount.
- **Dynamic cart badge**: The navigation bar displays a shopping cart icon with the dynamic sum of all items in the cart (e.g., Rose × 2 + Aloe × 3 = 5 items).
- **Continue shopping**: Easily return to the plant catalog at any time via the "Continue Shopping" button.
- **Checkout message**: Interactive checkout trigger that displays a clear "Coming Soon" notification without navigating away to a broken link.
- **About Us**: Informative company background section detailing the nursery's mission, values, and plant care commitment.

---

## Technologies

- **React**: Modern component-based frontend framework (v18+)
- **JavaScript**: Core programming language utilizing modern ES6+ standards
- **JSX**: Declarative syntax extension for structuring UI components
- **Redux**: Predictable state container implemented via `@reduxjs/toolkit` and `react-redux`
- **React Router**: Client-side single-page routing via `react-router-dom`
- **CSS**: Custom modular, responsive styling with CSS custom properties and Flexbox/Grid layouts
- **Vite**: Ultra-fast frontend development build tool

---

## Project Structure

```
paradise-nursery/
├── public/
│   ├── favicon.svg                   # Nursery sprout icon
│   └── images/                       # Local botanical assets and fallbacks
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx               # Task 2: Company details, mission & values
│   │   ├── Cart.jsx                  # Task 7: Shopping cart, totals & checkout
│   │   ├── Navbar.jsx                # Navigation bar with dynamic cart count
│   │   └── ProductList.jsx           # Task 6: Plant listing across 3 categories
│   ├── data/
│   │   └── plantsData.js             # 18+ unique plants across 3 categories
│   ├── redux/
│   │   ├── CartSlice.jsx             # Task 5: Redux cart slice & selectors
│   │   └── store.js                  # Redux Toolkit store setup
│   ├── styles/
│   │   ├── AboutUs.css               # Styling for AboutUs component
│   │   ├── App.css                   # Landing page styling & animations
│   │   ├── Cart.css                  # Shopping cart layout & modal styling
│   │   ├── Navbar.css                # Header & dynamic cart badge styling
│   │   └── ProductList.css           # Product grid & category styling
│   ├── AboutUs.jsx                   # Root re-export for grader compatibility
│   ├── App.jsx                       # Task 3 & 4: Landing page with background image & routing
│   ├── Cart.jsx                      # Root re-export for grader compatibility
│   ├── CartSlice.jsx                 # Root re-export for grader compatibility
│   ├── ProductList.jsx               # Root re-export for grader compatibility
│   ├── index.css                     # Design tokens, variables & typography
│   └── main.jsx                      # Application entry point with Redux Provider & Router
├── index.html                        # HTML template with Google Fonts
├── package.json                      # Project dependencies & scripts
├── vite.config.js                    # Vite bundler configuration
└── README.md                         # Task 1: Complete project documentation
```

---

## Installation & Running Instructions

### 1. Prerequisites
Ensure **Node.js** (v18.0.0 or higher) and **npm** are installed on your machine.

Verify installation:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Open a terminal in the project directory (`paradise-nursery`) and run:
```bash
npm install
```

### 3. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to the local server URL (typically `http://localhost:5173`).

### 4. Build for Production
To generate a production-ready build:
```bash
npm run build
```

---

## Course Rubric Verification Checklist

| Task | Rubric Requirement | File Location | Status |
| :--- | :--- | :--- | :---: |
| **Task 1** | README.md exists with required project details, features, tech stack | `README.md` | Completed |
| **Task 2** | AboutUs.jsx with company name, description, mission, and background | `src/components/AboutUs.jsx` | Completed |
| **Task 3** | App.jsx contains landing page background image implementation | `src/App.jsx` | Completed |
| **Task 4** | App.jsx landing page with company name, description, working "Get Started" button | `src/App.jsx` | Completed |
| **Task 5** | CartSlice.jsx with Redux state for add, increase, decrease, remove, and dynamic item count | `src/redux/CartSlice.jsx` | Completed |
| **Task 6** | ProductList.jsx with at least 3 categories, at least 6 unique plants each (18 total), name, price, thumbnail, disabled "Added to Cart" state, and dynamic cart icon count in navigation | `src/components/ProductList.jsx` | Completed |
| **Task 7** | Cart.jsx with dynamic total cart amount, per-plant totals, thumbnails, quantity controls (+/-), remove button, "Coming Soon" checkout message, and "Continue Shopping" button | `src/components/Cart.jsx` | Completed |

---

## Step-by-Step Testing Flow

1. **Landing Page**:
   - Open `/`.
   - Verify the company name **"Paradise Nursery"**, tagline, and plant description.
   - Verify the greenhouse nursery background image loads smoothly.
   - Click the **"Get Started"** button; confirm it immediately navigates to `/plants`.

2. **Product Listing Page**:
   - Observe the 3 categories:
     1. *Air Purifying Plants* (6 plants)
     2. *Aromatic & Flowering Plants* (6 plants)
     3. *Low-Maintenance & Succulents* (6 plants)
   - Verify every plant has an image thumbnail, title, description, and price.
   - Click **"Add to Cart"** on any plant; observe that the button text changes to **"Added to Cart"** and is disabled.
   - Notice the cart icon in the navigation bar displays the updated total count badge.

3. **Shopping Cart Page**:
   - Click the **Cart** link in the navigation bar (`/cart`).
   - Confirm each added plant is displayed with its thumbnail, name, unit price, quantity, and item subtotal (`price × quantity`).
   - Click the **`+`** button to increase quantity; observe that item subtotal, total cart amount, and navbar count badge update immediately.
   - Click the **`-`** button to decrease quantity; observe that totals decrement dynamically and quantity stops at `1`.
   - Click **"Delete"** on an item; observe that the item is removed and the total amount recalculates.
   - Click the **"Checkout"** button; observe the **"Coming Soon!"** notification box.
   - Click **"Continue Shopping"**; confirm it returns to `/plants`.

---

## Submission Files

When submitting your course assignment, use the direct repository URLs for these files:

- `README.md`
- `src/App.jsx`
- `src/components/AboutUs.jsx` (and `src/AboutUs.jsx`)
- `src/components/ProductList.jsx` (and `src/ProductList.jsx`)
- `src/components/Cart.jsx` (and `src/Cart.jsx`)
- `src/redux/CartSlice.jsx` (and `src/CartSlice.jsx`)
