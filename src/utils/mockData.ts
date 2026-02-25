
import type { Tyre } from './types'

const BRANDS = ['Michelin','Goodyear','Pirelli','Bridgestone','Continental','Yokohama','Hankook','Dunlop']
const widths = ['175','185','195','205','215','225','235','245','255']
const profiles = ['40','45','50','55','60','65','70']
const rims = ['15','16','17','18','19','20']

export const mockTyres: Tyre[] = Array.from({length: 40}).map((_,i)=>{
  const width = widths[i % widths.length]
  const profile = profiles[i % profiles.length]
  const rim = rims[i % rims.length]
  const brand = BRANDS[i % BRANDS.length]
  const model = `RoadPro ${100+i}`
  const rating = (i % 5) + 1
  const price = 80 + (i*7)%140
  const fuel = ['A','B','C'][i%3] as 'A'|'B'|'C'
  const wet = ['A','B','C'][ (i+1)%3 ] as 'A'|'B'|'C'
  const noiseDb = 68 + (i%6)
  const season = (['summer','winter','all-season'] as const)[i%3]
  return { id: `${i+1}`, brand, model, width, profile, rim, rating, price, fuel, wet, noiseDb, season }
})
