import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import pricingReducer from './pricing/pricingSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pricing: pricingReducer
  },
  devTools: false
})