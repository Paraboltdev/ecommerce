import React, { useEffect } from 'react'
import { useState } from 'react'
import {useGetGameByNameQuery} from '../services/games'

const MoviesHttpCall = () => {
    const [fruits, setFruits]=useState('fortnite')
    const { data, error, isLoading } = useGetGameByNameQuery(fruits)
    console.log(data)

    const imagenUrl = "https://image.tmdb.org/t/p/w300" 
    

    // useEffect(()=>{
    //     fetch('https://api.themoviedb.org/3/discover/movie?api_key=5e6d91494c62aa650f3f1d4bdd93c010&serach=fortnite')
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setFruits(data.results)
    //     })
    //     .catch((err)=>console.log(err))
    // },[])
  return (
    <div>
      <input type='text'
      value={fruits}
      placeholder='movie'
      onChange={(e)=>setFruits(e.target.value)} 
      />
      <div style={{width:'40%', border:'solid 1px black', marginTop:'10px'}}>
       
        <div>{data?.results.map((movie)=>(
          <p key={movie.id}>{movie.name}</p>
        ))}</div>
      </div>
    </div>
  )
}

export default MoviesHttpCall