import React ,{useEffect, useState} from 'react'
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
import Axios from 'axios';



function Movie({image,title,overview,rating,id}) {
    const [random,setRandom] = useState(false);
    const {isAuthenticated,user} = useAuth0();
    const [track,setTrack] = useState(false)
    
    useEffect(() => {
        if(isAuthenticated){
            Axios.post('https://moviemojo-mern.herokuapp.com/find',{id:id,user_id:user.sub}).then((Response)=>{
            console.log(Response.data)
            setRandom(Response.data)
          
        });
        }
        
    }, [isAuthenticated,track])
    
    

    const addWatchlist = (id,title,image,overview,rating)=>{
        
            Axios.post('https://moviemojo-mern.herokuapp.com/addmovie',{
            user_id:user.sub,
            movie_id:id,
            title:title,
            image:image,
            rating:rating,
            overview:overview
            
        }).then((Response)=>{
            
            setTrack(!track);
        })

    }

    const removeWatchlist = (id) => {
        Axios.post('https://moviemojo-mern.herokuapp.com/remove',{id:id}).then((Response)=>{
            if(Response.data){
                alert('Removed from watchlist');
            }
        })
        setTrack(!track);
        

    }

        
    
        

    


    return (
        <div className='Movie relative px-2 mt-5 flex justify-items-center transition duration-500 transform hover:-translate-y-1 hover:scale-110'>
            <div>
                <div className='w-72'>
                <Link to={`Moviedetails/${id}`} > 
                    <img className='object-contain' src={image} alt = {title}/>
                </Link>
                </div>
                <div>
                    <Link to={`Moviedetails/${id}`} >   
                    <p className='font-bold w-72 text-lg font-sans truncate '>{title}</p>
                    </Link>
                    <div className='flex items-center justify-between' >
                    <div className='flex items-center'>
                    <p className='text-xl font-semibold text-pink-800 '>{rating}</p>
                    <StarIcon className='text-pink-800'/>
                    </div>
                    
                    {random ? (<>
                        <Checkbox icon={<DeleteIcon className='text-pink-800' />}
                           checkedIcon={<DeleteIcon className='text-pink-800' />}
                            disabled={!isAuthenticated}
                            onClick={()=>removeWatchlist(id)}/>
                        
                        
                    </>):(<>
                        <Checkbox icon={<BookmarkBorderIcon />}
                           checkedIcon={<BookmarkBorderIcon />}
                            disabled={!isAuthenticated}
                            onClick ={()=>addWatchlist(id,title,image,overview,rating)}/>
                    </>)}
                    
                    
                    
                    </div>
                    
                    
                    <p className="text-gray-800 text-white text-xl truncate overflow-hidden w-72">{overview}</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Movie
