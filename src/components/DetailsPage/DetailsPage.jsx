import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// imports for styling with Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,

    },
});

function DetailsPage () {

    const classes = useStyles();

    const movie = useSelector(store => store.clickedMovie)
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/');
    }

    return (
        
        <div className="movieBackground">
            <h1 className="movieTitle">{movie.title}</h1>
            <div className="movieDiv">
                
                <img src={movie.poster} alt={movie.title}/>
                <div className="movieDescription">
                {movie.genres.map(genre => {
                    return (
                        <h4 className="genresList" key={genre.name}> {genre.name} </h4>
                    )
                })}
                
                    <p>{movie.description}</p>
                </div>
            </div>
            <Button variant="outlined" className= "backButton" onClick={handleClick}>GO BACK TO MOVIE LIST</Button>
        
            
        </div>

    )
}

export default DetailsPage;