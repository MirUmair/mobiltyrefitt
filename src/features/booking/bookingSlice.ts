
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Booking = {
  name: string
  phone: string
  postcode: string
  date: string
  timeSlot: string
  notes?: string
}

type State = {
  open: boolean
  booking?: Booking | null
  step: 1|2|3
}

const initialState: State = { open: false, booking: null, step: 1 }

const slice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    openBooking(state) { state.open = true; state.step = 1 },
    closeBooking(state) { state.open = false },
    setBooking(state, action: PayloadAction<Partial<Booking>>) {
      state.booking = { ...(state.booking ?? {name:'',phone:'',postcode:'',date:'',timeSlot:'',notes:''}), ...action.payload }
    },
    nextStep(state) { if (state.step < 3) state.step = (state.step+1) as 2|3 },
    prevStep(state) { if (state.step > 1) state.step = (state.step-1) as 1|2 },
    resetBooking(state) { state.booking = null; state.step = 1; state.open = false }
  }
})

export const { openBooking, closeBooking, setBooking, nextStep, prevStep, resetBooking } = slice.actions
export default slice.reducer
