import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {useParams} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Moviedetails() {
    const [track,setTrack] = useState(false);
    const [random,setRandom] = useState(false);
    const {isAuthenticated,user} = useAuth0();
    const  { id } = useParams();
    const [movies, setMovies] = useState();
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            const data = Response.data;
            setMovies(data);
            console.log(movies)

        })
        if(isAuthenticated){
            Axios.post('https://moviemojo-mern.herokuapp.com/find',{id:id,user_id:user.sub}).then((Response)=>{
            console.log(Response.data)
            setRandom(Response.data)
          
        });
        }
    }, [isAuthenticated,track]);

    const addWatchlist = (id,title,image,overview,rating) => {
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

    const removeWatchlist = () => {
        Axios.post('https://moviemojo-mern.herokuapp.com/remove',{id:id}).then((Response)=>{
            if(Response.data){
                console.log('Removed from watchlist');
            }
        })
        setTrack(!track);
        

    }


    const img_url = `https://www.themoviedb.org/t/p/original${movies?.backdrop_path || movies?.poster_path}`;
    return (
        <div className='Moviedetails flex mt-12  items-center md:flex-row flex-col'>
        <div className='w-3/4 h-1/2 md:w-1/2'>
        <img className=" object-fill ml-3" src={img_url} alt = {movies?.original_title}/>
        
        </div>
        
        <div className='w-3/4 ml-10'>
        <p className='font-bold lg:text-3xl md:text-2xl text-xl mb-4'>{movies?.original_title }</p>

         <div className='flex items-center  justify-between' >
                    <div className='flex'>
                    <p className='md:text-xl text-lg font-semibold text-black-400 flex flex-column'><p className='text-yellow-400'>IMDB - </p>  {movies?.vote_average}</p>
                    <StarIcon className='text-yellow-400'/>
                    </div>
                    
                    <div className='flex items-center mr-10'>
                    
                    {random ? (<>
                        <Button variant="outlined" startIcon={<DeleteIcon className='text-pink-800' />} color="secondary" onClick={()=>removeWatchlist(id)} type="submit">
                        <p  className='text-md text-pink-800 font-semibold'>
                          Remove
                        </p>
                            
                        </Button>

                    </>):(<>
                    
                        <Checkbox icon={<BookmarkBorderIcon />}
                           checkedIcon={<BookmarkIcon />}
                            disabled={!isAuthenticated}
                            onClick ={()=>addWatchlist(id,movies?.title,img_url,movies?.overview,movies?.vote_average)}
                            type= "submit"

                           />
                    </>)}
                    
                    
                    </div>
                    
        </div>
        <p className="font-semibold w-full">{movies?.overview}</p>
        </div>
        
        </div>
    )   

}
export default Moviedetails;
