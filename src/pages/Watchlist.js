import React,{useEffect,useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Watchlistitem from '../components/Watchlistitem';
import Axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Watchlist() {
    const [movies, setMovies] = useState();
    const [track,setTrack] = useState(false);
    const { user } = useAuth0();

    useEffect(() => {
        Axios.post('https://moviemojo-mern.herokuapp.com/watchlist',{id:user.sub}).then((Response)=>{
            console.log(Response.data)

            setMovies(Response.data);
            console.log(movies);
        })
    }, [track])

    const removeWatchlist = (id) =>{
        
        Axios.post('https://moviemojo-mern.herokuapp.com/remove',{id:id}).then((Response)=>{
            if(Response.data){
                console.log('Removed from watchlist');
            }
        })
        setTrack(!track);
        
    }

    return (
        <div className='Watchlist mt-5'>
            {movies?.map((movie)=>{
                return (
                    <>
                    <Watchlistitem id = {movie.movie_id} image= {movie.image} title = {movie.title} overview = {movie.overview} rating = {movie.rating}/>
                    <div className='flex justify-end mr-10 items-center mb-3'>
                    <Button  variant = "outlined" startIcon={<DeleteIcon className='text-pink-800' />} color="secondary" onClick={()=>removeWatchlist(movie.movie_id)} type="submit">
                        <p  className='text-md text-pink-800 font-semibold'>
                          Remove
                        </p>
                            
                    </Button>
                    </div>
                    
                    </>
                )
            })}
        </div>
    )
}

export default Watchlist
