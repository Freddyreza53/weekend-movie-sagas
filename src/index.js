import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_MOVIE', fetchMovie)
}


function* fetchMovie(action) {
    // gets movie on page reload
    try {
        const movie = yield axios.get(`/api/movie/reload/${action.payload}`);
        console.log('get movie detail:', movie.data);
        yield put({ type: 'FETCH_DETAILS', payload: movie.data[0] });

    } catch {
        console.log('get all error');
    }
}

function* fetchDetails(action) {
    // get details of movie from DB
    try {
        const genres = yield axios.get(`/api/movie/genres/${action.payload.id}`);
        console.log('get movie detail:', genres.data);
        yield action.payload.genres = genres.data;
        yield put({ type: 'SET_MOVIE_DETAILS', payload: action.payload });

    } catch {
        console.log('get all error');
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// this is to eliminate error on reload
const empty = {
    id: '',
    name: '',
    genres: [],
    poster: '',
    title: ''
}

// Used to store selected movie
const clickedMovie = (state = empty, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        clickedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
