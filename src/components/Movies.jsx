import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";

import MovieCard from "./Card";

function Movies(props) {
  return props.movies && props.movies.length ? (
    <Container>
      <Row xs="5">
        {props.movies.map &&
          props.movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID}></MovieCard>
          ))}
      </Row>
    </Container>
  ) : (
    <h1> Please search for something first!</h1>
  );
}

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Movies);
