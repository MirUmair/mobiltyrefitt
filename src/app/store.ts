
import { configureStore } from '@reduxjs/toolkit'
import tyresReducer from '@/features/tyres/tyresSlice'
import cartReducer from '@/features/cart/cartSlice'
import bookingReducer from '@/features/booking/bookingSlice'
  import reviewsReducer from '@/features/reviews/reviewsSlice'

export const store = configureStore({
  reducer: {
    tyres: tyresReducer,
    cart: cartReducer,
    booking: bookingReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
