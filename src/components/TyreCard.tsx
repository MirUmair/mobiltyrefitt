
import React from 'react'
import Rating from './Rating'
import type { Tyre } from '@/utils/types'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/features/cart/cartSlice'
import { openBooking } from '@/features/booking/bookingSlice'

export default function TyreCard({ tyre }: { tyre: Tyre }) {
  const dispatch = useDispatch()
  return (
    <div className="glass rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-slate-800">{tyre.brand} {tyre.model}</h4>
          <p className="text-sm text-slate-600">{tyre.width}/{tyre.profile} R{tyre.rim} · {tyre?.season?.replace('-', ' ')}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-brand-700">£{tyre.price}</div>
          <div className="text-xs text-slate-500">per tyre inc. fitting</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Rating value={tyre.rating} />
        <div className="text-xs text-slate-500">Fuel {tyre.fuel} · Wet {tyre.wet} · {tyre.noiseDb} dB</div>
      </div>
      <div className="flex gap-3">
        <button className="btn btn-ghost" onClick={() => dispatch(addToCart({ tyre }))}>Add to cart</button>
        <button className="btn btn-primary" onClick={() => dispatch(openBooking())}>Book fitting</button>
      </div>
    </div>
  )
}
