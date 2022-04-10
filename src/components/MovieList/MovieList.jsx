import React, { useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
// imports for styling with Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import for carousel effect
import Carousel from 'react-elastic-carousel';

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 550,
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
            <section className="movies">
                <Carousel>
                {movies.map(movie => {
                    return (
                        <Card className={classes.root} key={movie.id}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt={movie.title}
                                // height="400vh"
                                // width="300vh"
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
                    );
                })}
                </Carousel>
            </section>
        </main>
    );
}

export default MovieList;

