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
    <div style={{ textAlign: "center" }}>
      <Card>
        <Link to={`/movies/${movie.imdbID}`}>
          <div style={{ height: "80%", alignSelf: "center" }}>
            <CardImg top width="100%" height="200px" src={movie.Poster} />
          </div>
        </Link>
        <div style={{ height: "170px" }}>
          <CardBody>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ height: "48px", alignSelf: "center" }}>
                <CardTitle height="100px">{movie.Title}</CardTitle>
              </div>
              <br />
              <div
                style={{
                  height: "80%",
                  alignSelf: "center"
                }}
              >
                <CardSubtitle>{movie.Year}</CardSubtitle>
                <br />
              </div>
              {favorites.find(fav => fav.Title == movie.Title) ? (
                "You love this movie!"
              ) : (
                <div
                  style={{
                    height: "80%",
                    alignSelf: "center",
                    marginTop: "auto"
                  }}
                >
                  <Button size="sm" onClick={e => addFav(movie)}>
                    Add to Favorites
                  </Button>
                </div>
              )}
            </div>
          </CardBody>
        </div>
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
