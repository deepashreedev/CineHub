import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import logo from '../images/ch-logo.png';
import WatchListContext from '../context/WatchListContext';

const Navbar = () => {
  const {watchlist} = useContext(WatchListContext)
  return (
    <nav className='bg-black text-white flex justify-between fixed w-full top-0 z-10 '>
            <Link to="/" className="">
        <img src={logo} alt="CineHub Logo" className="h-14 pt-3  pl-1" />
      </Link>
      <Link to="/Watchlist" className='text-lg py-5 px-4'> Watchlist ({watchlist.length})</Link>
    </nav>
  )
}

export default Navbar

