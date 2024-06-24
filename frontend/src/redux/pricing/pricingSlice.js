import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bungalowPrice: 2500,
  tentPrice: 300,
  tentPriceWithOwn: 150,
  tentPriceChildren: 150,
  tentPriceChildrenWithOwn: 75,
  caravanPrice: 650,
  caravanPriceWithExtra: 750,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
  },
});

export const {
  updateBungalowPrice,
  updateTentPrice,
  updateTentPriceWithOwn,
  updateTentPriceChildren,
  updateTentPriceChildrenWithOwn,
  updateCaravanPrice,
  updateCaravanPriceWithExtra,
} = pricingSlice.actions;

export default pricingSlice.reducer;
