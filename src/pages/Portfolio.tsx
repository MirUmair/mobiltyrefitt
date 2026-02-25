
import React from 'react'

const items = Array.from({length:9}).map((_,i)=>({title:`Job #${i+1}`,desc:'On‑site tyre fitting and balance, customer back on the road in under an hour.'}))

export default function Portfolio(){
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Our Work</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((x,i)=> (
          <div key={i} className="glass rounded-2xl p-4">
            <div className="h-32 bg-slate-200 rounded-xl mb-3" />
            <div className="font-semibold">{x.title}</div>
            <div className="text-sm text-slate-600">{x.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
