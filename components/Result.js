import Thumbnail from "./Thumbnail";

function Result({results}) {
  return (
    <div className="px-4 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex 3xl:flex-wrap justify-center">
      {results?.map((results)=>{
      return <Thumbnail key={results.id} results={results}/>
})}
    </div>
  )
}

export default Result