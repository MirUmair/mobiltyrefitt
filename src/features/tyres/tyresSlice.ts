
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockTyres } from '@/utils/mockData'
import type { Tyre } from '@/utils/types'

export type Filters = {
  brand?: string
  width?: string
  profile?: string
  rim?: string
  maxPrice?: number
  season?: Tyre['season'] | 'any'
}

type State = {
  catalogue: Tyre[]
  query: string
  filters: Filters
  selected?: Tyre | null
}

const initialState: State = {
  catalogue: mockTyres,
  query: '',
  filters: { season: 'any' },
  selected: null
}

const tyresSlice = createSlice({
  name: 'tyres',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setFilters(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = { ...state.filters, ...action.payload }
    },
    selectTyre(state, action: PayloadAction<Tyre | null>) {
      state.selected = action.payload
    }
  }
})

export const { setQuery, setFilters, selectTyre } = tyresSlice.actions
export default tyresSlice.reducer
