
import React from 'react'

export default function TrustpilotCTA({href}:{href:string}){
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded bg-white hover:bg-slate-50">
      <span>Review us on</span>
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.9 6.1 6.7.6-5 4.3 1.5 6.6-6-3.6-6 3.6 1.5-6.6-5-4.3 6.7-.6L12 2z" fill="#00b67a"/>
      </svg>
      <span className="font-semibold">Trustpilot</span>
    </a>
  )
}
