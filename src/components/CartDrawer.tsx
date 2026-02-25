
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/store'
import { removeFromCart, setQty, toggleCart, clearCart } from '@/features/cart/cartSlice'
import { Link } from 'react-router-dom'

export default function CartDrawer(){
  const {items, isOpen} = useSelector((s: RootState)=> s.cart)
  const dispatch = useDispatch()

  return (
    <div className={isOpen? 'fixed inset-0 z-50' : 'hidden'} aria-hidden={!isOpen}>
      <div className="absolute inset-0 bg-black/30" onClick={()=>dispatch(toggleCart(false))}/>
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="font-semibold text-lg">Your Cart</h3>
          <button onClick={()=>dispatch(toggleCart(false))} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>
        <div className="flex-1 overflow-auto space-y-3">
          {items.length===0 && <p className="text-slate-500">Your cart is empty.</p>}
          {items.map(({tyre, qty})=> (
            <div key={tyre.id} className="flex items-center justify-between gap-3 border rounded-xl p-3">
              <div>
                <div className="font-medium">{tyre.brand} {tyre.model}</div>
                <div className="text-xs text-slate-500">{tyre.width}/{tyre.profile} R{tyre.rim}</div>
              </div>
              <input type="number" min={1} value={qty} onChange={e=>dispatch(setQty({id: tyre.id, qty: Number(e.target.value)}))} className="w-16 border rounded-md px-2 py-1"/>
              <div className="font-semibold">£{tyre.price*qty}</div>
              <button onClick={()=>dispatch(removeFromCart(tyre.id))} className="text-red-600">Remove</button>
            </div>
          ))}
        </div>
        <div className="border-t pt-3 flex items-center justify-between">
          <button onClick={()=>dispatch(clearCart())} className="text-slate-600 hover:underline">Clear</button>
          <Link to="/checkout" onClick={()=>dispatch(toggleCart(false))} className="btn btn-primary">Checkout</Link>
        </div>
      </aside>
    </div>
  )
}
