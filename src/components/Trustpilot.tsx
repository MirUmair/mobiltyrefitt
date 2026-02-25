
import React from 'react'
import { BUSINESS } from '@/utils/constants'

export default function Trustpilot(){
  return (
    <a href={BUSINESS.trustpilot.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 bg-white hover:bg-slate-50">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Trustpilot_logo.png" alt="Trustpilot" className="h-4"/>
      <span className="font-semibold">{BUSINESS.trustpilot.rating.toFixed(1)}</span>
      <span className="text-xs text-slate-600">({BUSINESS.trustpilot.reviews}+ reviews)</span>
    </a>
  )
}
