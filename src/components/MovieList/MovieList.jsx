import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
// imports for styling with Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 165,

    },
});

function MovieList() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (clickedMovie) => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: clickedMovie
        })
        history.push('/detailsPage');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card className={classes.root} key={movie.id}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt={movie.title}
                                height="250"
                                image={movie.poster}
                                title={movie.title}
                                onClick={() => handleClick(movie)}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {movie.title}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        // <div key={movie.id} >
                        //     <h3>{movie.title}</h3>
                        //     <img onClick={() => handleClick(movie)} src={movie.poster} alt={movie.title}/>
                        // </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;

