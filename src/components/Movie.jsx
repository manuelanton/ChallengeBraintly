import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  CardSubtitle,
  Button,
  Container,
  Row
} from "reactstrap";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addFav, fetchMovie } from "../store/actions";

const Movie = ({ selectedMovie, addFav, favorites, fetchMovie, match }) => {
  useEffect(() => {
    fetchMovie(match.params.movieID);
  }, []);

  return (
    selectedMovie && (
      <Container>
        <Row xs="2">
          <Card>
            <CardImg top width="100%" src={selectedMovie.Poster} />
          </Card>
          <Card>
            <CardHeader tag="h3">{selectedMovie.Title}</CardHeader>
            <CardBody>
              <CardTitle>
                Released on {selectedMovie.Year}, directed by{" "}
                {selectedMovie.Director}
              </CardTitle>
              <br />
              <CardText>Synopsis: {selectedMovie.Plot}</CardText>
              <CardText>Genre: {selectedMovie.Genre}</CardText>
              <CardText>Runtime: {selectedMovie.Runtime}</CardText>
              <CardText>Cast: {selectedMovie.Actors}</CardText>
              <br />
              <br />

              {favorites.find(
                fav => fav.Title == movie.Title && fav.Year == movie.Year
              ) ? (
                "You love this movie!"
              ) : (
                <Button size="sm" onClick={e => addFav(selectedMovie)}>
                  Add to Favorites
                </Button>
              )}
            </CardBody>
          </Card>
        </Row>
      </Container>
    )
  );
};

const mapStateToProps = ({ movies, favorites, selectedMovie }) => ({
  movies,
  favorites,
  selectedMovie
});

const mapDispatchToProps = {
  addFav,
  fetchMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
