
import React from 'react'
export default function Rating({value}:{value:number}){
  return (
    <div className="flex gap-0.5">
      {Array.from({length:5}).map((_,i)=> (
        <svg key={i} viewBox="0 0 20 20" className={i<value?'w-4 h-4 fill-yellow-400':'w-4 h-4 fill-slate-300'}><path d="M10 1.5l2.7 5.48 6.05.88-4.38 4.26 1.04 6.05L10 15.9l-5.4 2.27 1.04-6.05L1.26 7.86l6.05-.88L10 1.5z"/></svg>
      ))}
    </div>
  )
}
