
import React from 'react'

const faqs = [
  {q:'How fast can you arrive?', a:'Typical arrival within 30–60 minutes depending on traffic and location.'},
  {q:'Do you operate 24/7?', a:'Yes, emergency callouts run day and night including weekends.'},
  {q:'Can you fit tyres at work or home?', a:'Absolutely. We come to your driveway, car park, or roadside.'},
  {q:'Which payments do you accept?', a:'Card and cash on fitting. For online payments, integrate Stripe/PayPal.'},
]

export default function FAQ(){
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-3">
        {faqs.map((f,i)=> (
          <details key={i} className="glass rounded-xl p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
