import { Skeleton } from "./skeleton"

export default function Loading(){
    return(
        <main className='m-10 rounded-md grid grid-cols-6 gap-12'>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (

        <div key={id} className= 'bg-grey p-8 col-span-4 md:col-span-2'>

         <Skeleton className="h-6 w-1/2 bg-gray-200 mb-2"></Skeleton>
         <Skeleton className="h-6 w-1/4 mb-4"></Skeleton>
         <Skeleton className="rounded-md w-full h-60 bg-gray-200 "> </Skeleton>
        
          </div>
          ))}
      </main>
    )
}