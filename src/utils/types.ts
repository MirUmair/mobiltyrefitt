
export type Tyre = {
  id: string
  brand: string
  model: string
  width: string
  profile: string
  rim: string
  rating: number
  price: number
  runflat?: boolean
  fuel?: 'A'|'B'|'C'|'D'
  wet?: 'A'|'B'|'C'|'D'
  noiseDb?: number
  season?: 'summer'|'winter'|'all-season'
}
