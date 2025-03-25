import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appSlice.jsx';
import productReducer from './slices/productSlice.jsx'





export const store = configureStore({
  reducer: {
    app : appReducer,
    products : productReducer
  },
})

