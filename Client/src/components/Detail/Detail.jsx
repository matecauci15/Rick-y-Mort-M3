import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const APY_KEY = "96170c782b97.602e828731d7f91baba9"
// http://localhost:3001/rickandmorty/character/${id}
const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    


    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {  
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div>
         <h2>Name: {character?.name}</h2>
         <p>Status: {character?.status}</p>
         <p>Species: {character?.species}</p>
         <p>Gender: {character?.gender}</p>
         <p>Origin: {character?.origin?.name}</p>
         <img src={character?.image} alt="img" />
        </div>
    )
}

export default Detail;