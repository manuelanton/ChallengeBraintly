import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";

import MovieCard from "./Card";

function Movies(props) {
  return props.favorites.length ? (
    <Container>
      <Row xs="5">
        {props.favorites.map &&
          props.favorites.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID}></MovieCard>
          ))}
      </Row>
    </Container>
  ) : (
    "You haven't liked any movies yet!"
  );
}

const mapStateToProps = ({ favorites }) => ({ favorites });

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Movies);
