import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bungalowPrice: 2500,
  tentPrice: 300,
  caravanPrice: 650,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    updateBungalowPrice: (state, action) => {
      state.bungalowPrice = action.payload;
    },
    updateTentPrice: (state, action) => {
      state.tentPrice = action.payload;
    },
    updateCaravanPrice: (state, action) => {
      state.caravanPrice = action.payload;
    },
  },
});

export const { updateBungalowPrice, updateTentPrice, updateCaravanPrice } = pricingSlice.actions;

export default pricingSlice.reducer;
