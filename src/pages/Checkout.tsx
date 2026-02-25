import React from "react";
import SEO from "../components/SEO";

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <SEO 
        title="Checkout | Mobile Tyre Fitt" 
        description="Secure your booking for mobile tyre fitting services."
      />
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <p className="text-slate-600 mb-8">
        Your checkout is currently being processed. Please follow the instructions to complete your booking.
      </p>
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <p className="text-sm text-slate-500 italic">
          (Payment integration coming soon or redirected to secure provider)
        </p>
      </div>
    </div>
  );
}
