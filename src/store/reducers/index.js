import {
  RECEIVE_MOVIE,
  RECEIVE_MOVIES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "../constants";

const initialState = {
  selectedMovie: {},
  movies: [],
  favorites: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MOVIE: {
      return { ...state, selectedMovie: action.movie };
    }
    case RECEIVE_MOVIES: {
      return { ...state, movies: action.movies.Search };
    }
    case ADD_FAVORITE: {
      return { ...state, favorites: [...state.favorites, action.movie] };
    }
    case REMOVE_FAVORITE: {
      let noFav = state.favorites.filter(
        movie => movie.imdbID !== action.favID
      );
      return { ...state, favorites: noFav };
    }
    default:
      return state;
  }
}
