import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
function Watchlistitem({id,title,image,overview,rating}) {
   

    
    return (
        <div  className='flex mb-3 p-4 justify-center flex-col md:flex-row items-center ' >
        <div className='w-72'>
                <Link to={`Moviedetails/${id}`} > 
                    <img className='object-contain' src={image} alt = {title}/>
                </Link>
        </div>
        <div className='w-3/4 ml-3'>
            <Link to={`Moviedetails/${id}`}>
            <p className='font-bold text-lg'>{title}</p>
            </Link>
            <div className='flex'>
            <p className='text-lg text-pink-800 font-semibold'> Ratings - {rating}  </p>
            <StarIcon className='text-pink-800'/>
            </div>
            
            
            <p className='truncate text-lg text-gray-800 '>{overview}</p>
            
        </div>
            
        </div>
    )
}

export default Watchlistitem
