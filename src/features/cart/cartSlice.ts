
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Tyre } from '@/utils/types'

type CartItem = { tyre: Tyre, qty: number }
type State = { items: CartItem[], isOpen: boolean }

const initialState: State = { items: [], isOpen: false }

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{tyre: Tyre, qty?: number}>) {
      const { tyre, qty = 1 } = action.payload
      const existing = state.items.find(i => i.tyre.id === tyre.id)
      if (existing) existing.qty += qty
      else state.items.push({ tyre, qty })
      state.isOpen = true
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.tyre.id !== action.payload)
    },
    setQty(state, action: PayloadAction<{id: string, qty: number}>) {
      const item = state.items.find(i => i.tyre.id === action.payload.id)
      if (item) item.qty = action.payload.qty
    },
    clearCart(state) {
      state.items = []
    },
    toggleCart(state, action: PayloadAction<boolean | undefined>) {
      state.isOpen = action.payload ?? !state.isOpen
    }
  }
})

export const { addToCart, removeFromCart, setQty, clearCart, toggleCart } = slice.actions
export default slice.reducer
