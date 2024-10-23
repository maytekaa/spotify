import {Link} from "react-router-dom";
import { useEffect, useState } from "react";


export default function ConteudoPrincipal(){

    const[artistas, setArtistas] = useState([]);
  
  
    useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
    },[])
    
      return(
        <div>
        <>
        <h1>Pop</h1>
       { 
        artistas
        .filter( artista => artista.genero === "Pop")
        .map(artista => (
            <Link to={`/artista/${artista._id}`}>
          <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
          <h1>{artista.name}</h1>
          </div>
          </Link>
        ))
       }
        </>
  
        <>
        <h1>MPB</h1>
       {
        artistas
        .filter( artista => artista.genero === "MPB")
        .map(artista => (
            <Link to={`/artista/${artista._id}`}>
          <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
          <h1>{artista.name}</h1>
          </div>
          </Link>
        ))
       }
        </>
  
        <>
        <h1>RAP</h1>
       {
        artistas
       .filter( artista => artista.genero === "RAP")
        .map(artista => (
        <Link to={`/artista/${artista._id}`}>
          <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
          <h1>{artista.name}</h1>
          </div>
          </Link>
        ))
       }
        </>

        <>
        <h1>Trap</h1>
       {
        artistas
       .filter( artista => artista.genero === "Trap")
        .map(artista => (
        <Link to={`/artista/${artista._id}`}>
          <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
          <h1>{artista.name}</h1>
          </div>
          </Link>
        ))
       }
       </>
        </div>

        
      )
  }