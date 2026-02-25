
import React, { useMemo } from 'react'
import Filters from '@/components/Filters'
import TyreCard from '@/components/TyreCard'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'

export default function Tyres(){
  const { catalogue, query, filters } = useSelector((s: RootState)=> s.tyres)

  const filtered = useMemo(()=>{
    return catalogue.filter(t => {
      const q = query.toLowerCase()
      if(q && !(t.brand.toLowerCase().includes(q) || t.model.toLowerCase().includes(q))) return false
      if(filters.width && t.width !== filters.width) return false
      if(filters.profile && t.profile !== filters.profile) return false
      if(filters.rim && t.rim !== filters.rim) return false
      if(typeof filters.maxPrice === 'number' && t.price > filters.maxPrice) return false
      if(filters.season && filters.season !== 'any' && t.season !== filters.season) return false
      return true
    })
  }, [catalogue, query, filters])

  return (
    <div className="grid gap-6 md:grid-cols-[280px,1fr]">
      <Filters />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(t => <TyreCard key={t.id} tyre={t} />)}
      </div>
    </div>
  )
}
