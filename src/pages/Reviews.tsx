
import React from 'react'
import ReviewsBlock from '@/components/ReviewsBlock'
import TrustpilotCTA from '@/components/TrustpilotCTA'

export default function Reviews(){
  return (
    <div className="space-y-6">
      <ReviewsBlock />
      <div>
        <TrustpilotCTA href="https://www.trustpilot.com/review/mobiletyregiant.co.uk" />
      </div>
    </div>
  )
}
