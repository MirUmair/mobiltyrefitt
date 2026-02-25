
import React from 'react'
import { BUSINESS } from '@/utils/constants'

export default function EmergencyBar(){
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <a href={"tel:"+BUSINESS.phone.replace(/\s/g,'')} className="mx-3 mb-3 block rounded-2xl text-center py-3 font-semibold shadow-soft text-white bg-gradient-to-r from-brand-600 to-accent-600">
        🚚 24/7 Emergency Call — ETA {BUSINESS.emergencyEta}
      </a>
    </div>
  )
}
