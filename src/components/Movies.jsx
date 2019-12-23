import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";

import MovieCard from "./Card";

function Movies(props) {
  return props.movies.length ? (
    <Container>
      <Row xs="5">
        {props.movies.map &&
          props.movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID}></MovieCard>
          ))}
      </Row>
    </Container>
  ) : (
    "Please search for something first!"
  );
}

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Movies);
