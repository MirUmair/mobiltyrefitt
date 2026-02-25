
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilters, setQuery } from '@/features/tyres/tyresSlice'

export default function SearchForm(){
  const [queryLocal, setQueryLocal] = useState('')
  const dispatch = useDispatch()
  function submit(e: React.FormEvent){
    e.preventDefault()
    dispatch(setQuery(queryLocal))
  }
  return (
    <form onSubmit={submit} className="glass rounded-2xl p-4 grid gap-3 md:grid-cols-5">
      <input value={queryLocal} onChange={e=>setQueryLocal(e.target.value)} placeholder="Search by brand or model…" className="md:col-span-2 rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"/>
      <select onChange={e=>dispatch(setFilters({width: e.target.value || undefined}))} className="rounded-xl border border-slate-300 px-3 py-2"><option value="">Width</option>{['175','185','195','205','215','225','235','245','255'].map(v=> <option key={v} value={v}>{v}</option>)}</select>
      <select onChange={e=>dispatch(setFilters({profile: e.target.value || undefined}))} className="rounded-xl border border-slate-300 px-3 py-2"><option value="">Profile</option>{['40','45','50','55','60','65','70'].map(v=> <option key={v} value={v}>{v}</option>)}</select>
      <select onChange={e=>dispatch(setFilters({rim: e.target.value || undefined}))} className="rounded-xl border border-slate-300 px-3 py-2"><option value="">Rim</option>{['15','16','17','18','19','20'].map(v=> <option key={v} value={v}>{v}</option>)}</select>
      <button className="btn btn-primary md:col-span-5 md:justify-self-start">Search</button>
    </form>
  )
}
