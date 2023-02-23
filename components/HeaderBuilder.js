import Image from "next/image"

function HeaderBuilder({Img,Title}) {
  return (
    <div className=" flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Img className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className=" opacity-0 group-hover:opacity-100 tracking-wider">{Title}</p> 
    </div>
  )
}

export default HeaderBuilder