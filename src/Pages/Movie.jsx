import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import "../index.css"
const Movie = () => {
    let location = useLocation();
    // console.log(location);
    let specificMovie=location.state.cards;
    // console.log(specificMovie);
    let [trailer,setTrailer]=useState("");
    async function getTrailer(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=700cf67663fb16ff8148b3d042bbe472`)
        .then(res=>res.json())
        .then(x=>setTrailer(x.results[0].key))
        .catch(e=>console.log("Api failed",e))
    }
    // console.log(trailer);
    
  return (
    <div className='container'>
        <section className='section'>
        <img src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`}
         alt="" 
         style={{width:"350px",height:"250px"}}/>
        <br />
        <h3>{specificMovie.title}</h3>
        <p>{specificMovie.overview}</p>
        <b>{specificMovie.vote_average}</b>
        <br />
        <button onClick={()=>getTrailer(specificMovie.id)}>Play Trailer</button>
        <div className='trailer'>
            {trailer && <YouTube videoId={trailer}/>}
        </div>
        </section>
    </div>
  )
}
export default Movie