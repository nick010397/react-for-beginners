import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState(true);
    const {id} = useParams();
    const getMovies = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json(); 
        setMovies(json);
       }
    
    
    useEffect(()=>{
        getMovies();
    
    },[])
   
        return (
        <h1>{loading ? 'Loading...' : null}</h1>
        )
    }

export default Detail;