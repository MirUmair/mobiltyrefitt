
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/store'
import { closeBooking, nextStep, prevStep, setBooking, resetBooking } from '@/features/booking/bookingSlice'

export default function BookingModal(){
  const { open, step, booking } = useSelector((s: RootState)=> s.booking)
  const dispatch = useDispatch()

  function submit(e: React.FormEvent){
    e.preventDefault()
    if (step < 3) dispatch(nextStep())
    else {
      alert('Booking confirmed!\nThis is a demo – hook into your backend.')
      dispatch(resetBooking())
    }
  }

  if(!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={()=>dispatch(closeBooking())}/>
      <div className="absolute inset-0 grid place-items-center p-4">
        <form onSubmit={submit} className="w-full max-w-xl bg-white rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Book Mobile Fitting</h3>
            <button type="button" onClick={()=>dispatch(closeBooking())} className="text-slate-600">Close</button>
          </div>

          {step===1 && (
            <div className="grid gap-3 md:grid-cols-2">
              <input required placeholder="Full name" onChange={e=>dispatch(setBooking({name: e.target.value}))} className="border rounded-xl px-3 py-2"/>
              <input required placeholder="Phone" onChange={e=>dispatch(setBooking({phone: e.target.value}))} className="border rounded-xl px-3 py-2"/>
              <input required placeholder="Postcode" onChange={e=>dispatch(setBooking({postcode: e.target.value}))} className="border rounded-xl px-3 py-2 md:col-span-2"/>
            </div>
          )}

          {step===2 && (
            <div className="grid gap-3 md:grid-cols-2">
              <input required type="date" onChange={e=>dispatch(setBooking({date: e.target.value}))} className="border rounded-xl px-3 py-2"/>
              <select required onChange={e=>dispatch(setBooking({timeSlot: e.target.value}))} className="border rounded-xl px-3 py-2">
                <option value="">Select a time slot</option>
                <option>08:00–10:00</option>
                <option>10:00–12:00</option>
                <option>12:00–14:00</option>
                <option>14:00–16:00</option>
                <option>16:00–18:00</option>
              </select>
              <textarea placeholder="Notes (optional)" onChange={e=>dispatch(setBooking({notes: e.target.value}))} className="border rounded-xl px-3 py-2 md:col-span-2" rows={3}/>
            </div>
          )}

          {step===3 && (
            <div className="bg-slate-50 rounded-xl p-4 text-sm space-y-1">
              <div><span className="text-slate-500">Name:</span> {booking?.name}</div>
              <div><span className="text-slate-500">Phone:</span> {booking?.phone}</div>
              <div><span className="text-slate-500">Postcode:</span> {booking?.postcode}</div>
              <div><span className="text-slate-500">Date:</span> {booking?.date}</div>
              <div><span className="text-slate-500">Time slot:</span> {booking?.timeSlot}</div>
              <div><span className="text-slate-500">Notes:</span> {booking?.notes || '—'}</div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button type="button" onClick={()=>dispatch(prevStep())} disabled={step===1} className="btn btn-ghost disabled:opacity-50">Back</button>
            <button className="btn btn-primary">{step<3? 'Next' : 'Confirm Booking'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
