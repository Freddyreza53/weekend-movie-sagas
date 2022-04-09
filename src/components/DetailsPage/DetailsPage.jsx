import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function DetailsPage () {
    const movie = useSelector(store => store.clickedMovie)

    console.log(movie);

    return (
        <div>
            <h3>{movie.title}</h3>
            <img onClick={() => handleClick(movie)} src={movie.poster} alt={movie.title}/>
            <p>{movie.description}</p>
        </div>

    )
}

export default DetailsPage;