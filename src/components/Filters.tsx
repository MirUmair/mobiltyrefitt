
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilters } from '@/features/tyres/tyresSlice'

export default function Filters(){
  const dispatch = useDispatch()
  const [price, setPrice] = useState(200)
  return (
    <aside className="glass rounded-2xl p-4 space-y-4">
      <h3 className="font-semibold text-slate-800">Filters</h3>
      <div>
        <label className="text-sm text-slate-600">Season</label>

        <select onChange={e=>dispatch(setFilters({season: e.target.value as any}))} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
          <option value="any">Any</option>

          <option value="summer">Summer</option>

          <option value="winter">Winter</option>

          <option value="all-season">All Season</option>

        </select>
      </div>
      <div>
        <label className="text-sm text-slate-600">Max Price: £{price}</label>
        <input type="range" min="60" max="300" step="10" value={price} onChange={e=>{ const v = Number(e.target.value); setPrice(v); dispatch(setFilters({maxPrice: v})) }} className="w-full"/>
      </div>
    </aside>
  )
}
