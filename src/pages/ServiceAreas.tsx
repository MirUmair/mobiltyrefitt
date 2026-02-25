
import React from 'react'
import { BUSINESS } from '@/utils/constants'

export default function ServiceAreas(){
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Service Areas</h1>
      <p className="text-slate-600 mb-4">Proudly serving:</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {BUSINESS.serviceAreas.map(a=> (
          <div key={a} className="glass rounded-xl p-3">{a}</div>
        ))}
      </div>
    </div>
  )
}
