import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product to cart; if already exists, increment quantity
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          category: product.category,
          quantity: 1
        });
      }
    },

    // Increase quantity of a plant by 1
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity of a plant by 1; do not drop below 1
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Update quantity directly (must be >= 1)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && quantity >= 1) {
        item.quantity = quantity;
      }
    },

    // Remove product completely from cart
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  removeItem,
  clearCart
} = CartSlice.actions;

// Selectors for dynamic calculations
export const selectCartItems = (state) => state.cart.items;

// Total count of individual items (e.g. Rose x 2 + Aloe x 3 = 5)
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Total cart cost = sum(price * quantity)
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default CartSlice.reducer;
