import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from  "react-icons/fa" 
import { WatchListContext } from '../context/WatchListContext';


const Moviecard = ({movie}) => {

  const {toggleWatchlist, watchlist} = useContext(WatchListContext)

const inWatchList = watchlist.some((m) => m.id == movie.id);


  return (
    <div className='bg-gray-900 rounded-md shadow-md text-white relative  transform transition-transform duration-400 hover:scale-105 hover:shadow-2xl'>
<img
 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
alt="{movie.title}"
className='w-full  h-[30vh] md:h-[38vh] lg:h-[53vh] rounded-sm  p-2' />
<h3 className='text-lg font-bold mt-2 px-3  '>{movie.title}</h3>
<p className='text-sm text-gray-500 px-3 pt-1 pb-3 '>{movie.release_date}</p>
<button className='absolute top-3 right-3 text-red-600 text-2xl font-bold ' onClick={() => toggleWatchlist(movie)}
  >{ inWatchList ? <FaHeart/> : <FaRegHeart/> }
</button>
    </div>
  )
}

export default Moviecard