import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// imports for styling with Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
// });

function DetailsPage () {

    // const classes = useStyles();

    const movie = useSelector(store => store.clickedMovie)
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/');
    }

    return (
        
        <div>
            <h1>{movie.title}</h1>
            {movie.genres.map(genre => {
                return (
                    <h4 key={genre.name}>{genre.name}</h4>
                )
            })}
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.description}</p>
            <button onClick={handleClick}>GO BACK TO MOVIE LIST</button>
        
        

            {/* <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card> */}
        </div>

    )
}

export default DetailsPage;