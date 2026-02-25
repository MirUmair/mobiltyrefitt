
import React from 'react'

export default function StarRatingInput({value,onChange}:{value:number,onChange:(v:number)=>void}){
  return (
    <div className="flex gap-1">
      {Array.from({length:5}).map((_,i)=>{
        const n = i+1
        const active = n <= value
        return (
          <button type="button" key={n} aria-label={`Rate ${n}`} onClick={()=>onChange(n)} className="p-0.5">
            <svg viewBox="0 0 20 20" className={active?'w-6 h-6 fill-yellow-400':'w-6 h-6 fill-slate-300'}><path d="M10 1.5l2.7 5.48 6.05.88-4.38 4.26 1.04 6.05L10 15.9l-5.4 2.27 1.04-6.05L1.26 7.86l6.05-.88L10 1.5z"/></svg>
          </button>
        )
      })}
    </div>
  )
}
