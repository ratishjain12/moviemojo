import React from 'react'
import {useState,useEffect} from 'react';
import Axios from 'axios';
import requests from '../requests';
import Movie from '../Movie';

function Nowplaying() {
  
        const [movies, setMovies] = useState();
        const base_url = "https://api.themoviedb.org/3";
        
      
        useEffect(() => {
          Axios.get(`${base_url}${requests.fetchNowplaying}`).then((Response)=>{
            const  data = Response.data.results;
            setMovies(data);
            
            console.log(movies);
          })
        }, []);
    
    
    
        return (
            <div>
             
          <div className="w-full h-full flex flex-wrap items-center justify-center ">
          
          {movies?.map((movie)=>(
            
            <Movie image = {`https://www.themoviedb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} title={movie.name || movie.original_title} overview={movie.overview} rating={movie.vote_average} id={movie.id || movie.imdb_id }/>
        
          
        ))} 
          
          
          </div>
          
        </div>
    )
}

export default Nowplaying
