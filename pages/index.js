import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Result from '../components/Result'
import requests from '../utils/requests'
import { useRouter } from 'next/router'

export default function Home({results}) {
  return (
   <div>

    <Header />

    <Navbar />
 
    <Result results={results.results}/>
   </div>
  )
}
// https://api.themoviedb.org/3/discover/movie?api_key=b9d57ac498e9f343425507e6e60558c9&with-genres=878
export async function getServerSideProps(context){
  const genre=context.query.key;
  const request=await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  );
  const data=await request.json();
  return{
     props:{
    results:data,
     }
  }
}
