import React, { useEffect, useState }  from 'react'
import Moviecard from '../components/Moviecard'
import {FaAngleRight,FaAngleLeft} from "react-icons/fa"


const Home = () => {

const [movies, setMovies] = useState([]);
const [page, setPage] =useState(1);
const [search, setSearch] = useState("");



useEffect(() =>{

let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=9809b9b0149864980ac982c1283199ae`

  if(search){
url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=9809b9b0149864980ac982c1283199ae`
  }

  fetch(url)
.then((response) => response.json())
.then((data) => setMovies(data.results))
 .catch((error) => console.error("Failed to fetch movies:", error));
  }, [page, search]);


  return (
    <div className='p-4 pt-16 bg-black min-h-screen'>

<input type="text" 
placeholder='Search for movies...'
 className='p-2 mt-3  w-3/4 md:w-1/2 border rounded border-gray-600 
 bg-gray-900/60 backdrop-blur-md text-white fixed  top-16 left-1/2 
 transform -translate-x-1/2 z-10'
 
 onChange={(e) => setSearch(e.target.value)}
 />

<div className="movies-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 ">

{movies.map(movie=>{
  return(
    <Moviecard key={movie.id} movie={movie}/>
  )
})}
</div>

<div className="pagination-container flex justify-between mt-5">
<button 
disabled={page == 1}
className='text-2xl  py-3 px-3 bg-zinc-800 hover:bg-zinc-900 hover:border hover:border-stone-500 text-white rounded-lg' onClick={() => setPage(prev => prev-1)} ><FaAngleLeft/></button>
<button className='text-2xl  py-3 px-3 bg-zinc-800  hover:bg-zinc-900 hover:border hover:border-stone-500 text-white rounded-lg '  onClick={() => setPage(prev => prev+1)}><FaAngleRight/></button>
</div>

    </div>
  )
}

export default Home