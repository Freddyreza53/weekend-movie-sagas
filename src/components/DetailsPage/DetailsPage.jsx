import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function DetailsPage () {
    const movie = useSelector(store => store.clickedMovie)

    console.log(movie);

    return (
        <div>
            <h1>{movie.title}</h1>
            {movie.genres.map(genre => {
                return (
                    <h4>{genre.name}</h4>
                )
            })}
            <img onClick={() => handleClick(movie)} src={movie.poster} alt={movie.title}/>
            <p>{movie.description}</p>
        </div>

    )
}

export default DetailsPage;