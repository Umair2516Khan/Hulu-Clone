import requests from "../utils/requests"
import {useRouter} from "next/router";

//Object.entries() is a javascript function which returns the "pair of key and value" of an object
//Object.keys() is a javascript function which returns the key of an object
//Object.values() is a javascript function which returns the value of an object
function Navbar() {
 const router=useRouter();

  return (   
     <nav>
      <div className="relative whitespace-nowrap flex space-x-10 sm:space-x-20 px-10 
      sm:px-20 text-2xl overflow-x-scroll scrollbar-hide">
      {Object.entries(requests).map(([key,{title,url}])=>(
           <h2 className="text-white cursor-pointer transition duration-150 transform hover:scale-125
            active:text-green-500 last:pr-24 mb-6 focus:text-teal-400" key={key} onClick={()=>{router.push(`/?key=${key}`)}}>{title}</h2>
        ))}
        </div>
        <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202A] mt-44 sm:mt-28 h-10 w-1/12 "/>
        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] mt-44 sm:mt-28 h-10 w-1/12 md:w-20"/>
     </nav>
  );
}

export default Navbar