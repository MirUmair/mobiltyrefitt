
import React from 'react'
import { Link } from 'react-router-dom'

function Tile({title,desc,link}:{title:string,desc:string,link:string}){
  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
      <div className="mt-auto"><Link to={link} className="text-brand-700 hover:underline">Learn more →</Link></div>
    </div>
  )
}

export default function Services(){
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Tile title="Mobile Tyre Fitting" desc="We bring the workshop to your location and fit tyres same‑day." link="/tyres" />
      <Tile title="Mobile Tyre Repair" desc="Repair slow punctures and nail damage where you are." link="/tyres" />
      <Tile title="Mobile Tyre Replacement" desc="Like‑for‑like or upgrade options, balanced and ready to drive." link="/tyres" />
    </div>
  )
}
