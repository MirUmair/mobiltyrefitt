
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="text-center py-24">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-slate-600">We couldn't find that page.</p>
      <Link to="/" className="btn btn-primary mt-4">Go home</Link>
    </div>
  )
}
