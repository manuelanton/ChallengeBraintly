import {
  RECEIVE_MOVIE,
  RECEIVE_MOVIES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  PERSIST_FAVORITES
} from "../constants";
import axios from "axios";

export const fetchMovies = name => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${name}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies)));
export const fetchMovie = id => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));

export const removeFav = favID => ({
  type: REMOVE_FAVORITE,
  favID
});

export const persistFavs = favs => ({
  type: PERSIST_FAVORITES,
  favs
});

const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});
const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});
export const addFav = movie => ({
  type: ADD_FAVORITE,
  movie
});
