import { useEffect, useState } from "react"
import MovieApp from "../components/MovieApp";


export default function Home(){
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
      const json = await(
          await fetch(
              'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
          )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
  }
    useEffect(() => {
        getMovies();
     
  },[]);
  console.log(movies)
  
  return(
      <div>
          {loading ? <h1>Loading...</h1>: 
          <div>
            {movies.map(movie => 
            <MovieApp
            key={movie.id} 
            id={movie.id} 
            coverImg={movie.medium_cover_image}
             title={movie.title}
             summary={movie.summary} 
             genres={movie.genres}
             
             
             />
             
                  
          )}
          </div>
          }
      </div>
  )
  

  
}