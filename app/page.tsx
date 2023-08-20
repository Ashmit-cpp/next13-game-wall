import Image from 'next/image';

type Game = {
  id: number
  background_image: string
  rating: number
  name: string
}
const getGames = async (): Promise<Game[]> => {
  try{
    const res = await fetch(
      `https://api.rawg.io/api/games?key=bd787d3f678b498197b32db136fc919e`
    )
    if (!res.ok) {
      throw new Error("failed to fetch")
    }
    const data = await res.json()
    console.log(data)
    return data.results
  }
  catch (error) {
    // Handle the error here
    console.error("Error fetching games:", error); 
  }
};


export default async function Home() {
  try{
  const games = await getGames()
  return (
    <main className=' m-10 rounded-md grid grid-cols-6   gap-12'>
      {games.map((game) => (
        <div className= 'bg-grey1 p-8 font-bold col-span-4 xl:col-span-2  shadow-lg text-white' key={game.id}>
          <h1>{game.name}</h1>
          <p className='text-ylw text-sm mb-4'>{game.rating}</p>
          <div className='aspect-video relative'> 
          <Image 
            src={game.background_image}
            fill
            className="object-cover  rounded-md"
            alt={game.name}
            />
          </div>
        </div>
        ))}
    </main>
    )
      }
      catch (error) {
        // Handle the error here
        console.error("Error fetching games:", error); 
      }

  }