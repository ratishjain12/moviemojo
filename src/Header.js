import React from 'react'
import {Link} from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '@mui/material/Avatar';




function Header() {
  const {loginWithPopup,isAuthenticated ,user ,logout} = useAuth0();
    

    return (
        <div className='header w-full pt-2 '>
            <ul className='flex justify-between items-center flex-col bg-blue md:flex-row'>
            <div className='flex items-center'>
            <li>
              <Link to="/" className=' text-white lg:text-xl md:font-bold lg:font-bold font-semibold mx-2 pl-4 md:text-lg text-sm'>Trending </Link>
            </li>
      
            <li>
              <Link to="/Toprated" className=' text-white lg:text-xl md:font-bold lg:font-bold font-semibold mx-2 md:text-lg text-sm'>Toprated</Link>
            </li>
            <li>
              <Link to="/Popular" className=' text-white lg:text-xl md:font-bold lg:font-bold font-semibold mx-2 md:text-lg text-sm'>Popular</Link>
            </li>
            <li>
              <Link to="/Upcoming" className=' text-white lg:text-xl md:font-bold lg:font-bold font-semibold mx-2 md:text-lg text-sm'>Upcoming</Link>
            </li>
            <li>
              <Link to="/Nowplaying" className=' text-white lg:text-xl md:font-bold lg:font-bold font-semibold bg-blue mx-2 md:text-lg text-sm'>NowPlaying</Link>
            </li>
            </div>
            
            <div className='flex mr-3'>
                <li>
                    <Link to="/Watchlist" className='transition duration-500 transform hover:-translate-y-1 hover:scale-110 text-white lg:text-xl md:font-bold lg:font-bold font-semibold mr-3 md:text-lg text-sm'>
                    <BookmarkIcon/>
                    Watchlist
                    
                    </Link>
                </li>
                <li>
                  {isAuthenticated ? (<>
                    <button className = "text-white lg:text-xl lg:font-bold flex flex-wrap md:text-lg text-sm md:font-bold font-semibold items-center" onClick={()=> logout({returnTo:window.location.origin})}>
                    <Avatar alt="profile" src={user.picture} sx={{ width: 32, height: 32 }} />
                    <p className='ml-2'>Logout</p>
                    </button>
                  </>):(<>
                    <button className = "text-white lg:text-xl md:font-bold lg:font-bold font-semibold md:text-lg " onClick={()=> loginWithPopup()}>Login</button>
                  </>)}
                  
              </li>
            </div>
            
            
          </ul>

        </div>
    )
}

export default Header
