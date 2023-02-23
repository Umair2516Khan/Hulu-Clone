const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title : "Trending",
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US&language=en-US`,
    },
    fethcTopRated:{
     title:"Top Rated",
     url:`/movie/top_rated?api_key=${API_KEY}&language=en-US&language=en-US`,
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
    },
    fetchRomanceMovies:{
        title:"Romnce",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
    },
    fetchMystery:{
        title:"Mystery",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`,
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`,
    },
    fetchWestern:{
        title:"Western",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37&language=en-US`,
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`,
    },
    fetchTV:{
        title:"TV Movie",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`,
    },
}