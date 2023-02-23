import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image"

function Thumbnail({results}) {
    const BASE_URL="https://image.tmdb.org/t/p/original/";
    // setTimeout(()=>{
    // console.log(results);
    // },2000)
    
    // console.log(results);

  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image 
      layout="responsive"
      height="1080"
      width="1920"
      src={results && `${BASE_URL}${results.backdrop_path || results.poster_path}` || results && `${BASE_URL}?.${results.poster_path}` }
      />
      <div className="p-2">
        {results && <p className="truncate max-w-md">{results.overview}</p>}
        {results && <h2 className="text-2xl mt-1 text-white transition-all duration-100 ease-in-out font-bold md:font-normal group-hover:font-bold">{results.title || results.orignial_name || results.original_title || results.name}</h2>}
         <div className="flex space-x-4 items-center opacity-100 md:opacity-0 group-hover:opacity-100">
            {results.media_type && <p>{results.media_type}</p>}
            {results.release_date && <p>{results.release_date}</p>}
            <div className="flex items-center ">
            {results.vote_count && <ThumbUpIcon className="h-8 text-green-700"/>}
            {results.vote_count && <p className="text-green-700 font-semibold ">{results.vote_count}</p> }
            </div>
         </div>
      </div>
    </div>
  )
}

export default Thumbnail