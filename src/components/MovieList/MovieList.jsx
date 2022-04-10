import React, { useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
// imports for styling with Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
// import for carousel effect
import Carousel from 'react-elastic-carousel';

const useStyles = makeStyles({
    root: {
        width: 300,
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
        history.push(`/detailsPage/${clickedMovie.id}`);
    }

    return (
        <main>
            <h1>The Movies Saga!</h1>
            <section className="movies">
                <Carousel className="carouselDiv">
                {movies.map(movie => {
                    return (
                        <div className="cardDiv">
                        <Card className={classes.root} key={movie.id}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt={movie.title}
                                image={movie.poster}
                                title={movie.title}
                                onClick={() => handleClick(movie)}
                                />
                            </CardActionArea>
                        </Card> 
                        </div>
                    );
                })}
                </Carousel>
            </section>
        </main>
    );
}

export default MovieList;

