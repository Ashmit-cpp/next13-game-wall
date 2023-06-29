import Image from 'next/image';
import { resolve } from 'path';

type Game = {
  id: number
  background_image: string
  rating: number
  name: string
}
const getGames = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG}`
  )
  if (!res.ok) {
    throw new Error("failed to fetch")
  }
  await new Promise((resolve => setTimeout(resolve, 2200)))// delay for promise to resolve for skelton
  const data = await res.json()
  return data.results
}


export default async function Home() {
  const games = await getGames()
  return (
    <main className=' m-24 rounded-md grid grid-cols-4 gap-12'>
      {games.map((game) => (
        <div className= 'bg-grey1 p-8 font-bold col-span-4 xl:col-span-2  shadow-lg text-white' key={game.id}>
          <h1>{game.name}</h1>
          <p className='text-white text-sm mb-4'>{game.rating}</p>
          <div className='aspect-video relative'> 
          <Image 
            src={game.background_image}
            fill
            className="object-cover rounded-md"
            alt={game.name}
            />
          </div>
        </div>
        ))}
    </main>
    )
  }
