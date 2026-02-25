
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Review = {
  id: string
  name: string
  rating: number
  comment: string
  createdAt: string
}

type State = {
  items: Review[]
}

function load(): Review[] {
  try { const raw = localStorage.getItem('reviews'); if(raw) return JSON.parse(raw) } catch {}
  // seed a few demo reviews
  return [
    { id: 'r1', name: 'Sophie L.', rating: 5, comment: 'Fast and friendly mobile fitting. Back on the road in 40 mins!', createdAt: new Date().toISOString() },
    { id: 'r2', name: 'Imran K.', rating: 4, comment: 'Great price and same-day slot. Would use again.', createdAt: new Date().toISOString() },
    { id: 'r3', name: 'Grace M.', rating: 5, comment: 'Booked to my office car park, super convenient.', createdAt: new Date().toISOString() },
  ]
}

function persist(items: Review[]) {
  try { localStorage.setItem('reviews', JSON.stringify(items)) } catch {}
}

const initialState: State = { items: load() }

const slice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<{name: string, rating: number, comment: string}>) {
      const review: Review = {
        id: Math.random().toString(36).slice(2),
        name: action.payload.name.trim() || 'Anonymous',
        rating: Math.max(1, Math.min(5, Math.round(action.payload.rating))),
        comment: action.payload.comment.trim(),
        createdAt: new Date().toISOString()
      }
      state.items.unshift(review)
      persist(state.items)
    },
    clearReviews(state) {
      state.items = []
      persist(state.items)
    }
  }
})

export const { addReview, clearReviews } = slice.actions
export default slice.reducer
