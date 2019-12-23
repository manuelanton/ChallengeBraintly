import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addFav } from "../store/actions";

const MovieCard = ({ movie, addFav, favorites }) => {
  return (
    <div>
      <Card>
        <Link to={`/movies/${movie.imdbID}`}>
          <CardImg top width="100%" src={movie.Poster} />
        </Link>

        <CardBody>
          <CardTitle>{movie.Title}</CardTitle>
          <CardSubtitle>{movie.Year}</CardSubtitle>
          {favorites.includes(movie) ? (
            "You love this movie!"
          ) : (
            <Button size="sm" onClick={e => addFav(movie)}>
              Add to Favorites
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ movies, favorites }) => ({
  movies,
  favorites
});

const mapDispatchToProps = {
  addFav
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
