import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value: { products: [], cart: [] },
  },
  reducers: {
    addProducts: (state, action) => {
      state.value.products = action.payload;
    },
    addProductToCart: (state, action) => {
      const { id, qty } = action.payload;
      const product = state.value.products.find((p) => p.id == id);
      const existing = state.value.cart.find((p) => p.id == id);
      if (existing) {
        existing.quantity = qty;
      } else {
        state.value.cart.push({ ...product, quantity: qty });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, addProducts } = productSlice.actions;

export const syncQuantityWithCart = (cart) => (p) => {
  const product = cart.find((p2) => p2.id == p.id);
  if (product) {
    return product;
  } else {
    return { ...p, quantity: 1 };
  }
};

export default productSlice.reducer;
