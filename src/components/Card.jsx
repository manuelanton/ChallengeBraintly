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
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50% 25% 1fr 10%",
        gridTemplateAreas: "image title subtitle button"
      }}
    >
      <Card>
        <Link to={`/movies/${movie.imdbID}`}>
          <div
            style={{ gridArea: "image", heigth: "80%", alignSelf: "center" }}
          >
            <CardImg top width="100%" height="200px" src={movie.Poster} />
          </div>
        </Link>
        <div style={{ height: "170px" }}>
          <CardBody>
            <div
              style={{ gridArea: "title", heigth: "80%", alignSelf: "center" }}
            >
              <CardTitle height="100px">{movie.Title}</CardTitle>
            </div>
            <div
              style={{
                gridArea: "subtitle",
                heigth: "80%",
                alignSelf: "center"
              }}
            >
              <CardSubtitle>{movie.Year}</CardSubtitle>
            </div>
            {favorites.find(fav => fav.Title == movie.Title) ? (
              "You love this movie!"
            ) : (
              <div
                stlye={{
                  gridArea: "button",
                  heigth: "80%",
                  alignSelf: "center"
                }}
              >
                <Button size="sm" onClick={e => addFav(movie)}>
                  Add to Favorites
                </Button>
              </div>
            )}
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
