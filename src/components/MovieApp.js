import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
// .then(response => response.json())
// .then((json) => setMovies(json.data.movies))

export default function MovieApp({id,coverImg, title, summary, genres}){
   
    
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                       
                {genres.map(g => (
                 <li key={g}>{g}</li>

                ))}
                        
             </ul>
        </div>
    )
    MovieApp.prototype = {
        id: PropTypes.number.isRequired,
        coverImg: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    }
}
                   
           
              
            
           
            
        
