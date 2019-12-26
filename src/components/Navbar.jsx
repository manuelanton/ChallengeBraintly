import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";

import { fetchMovies, persistFavs } from "../store/actions/index";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.favs !== "[]" &&
      props.persistFavs(JSON.parse(localStorage.favs));
  }, []);

  useEffect(() => {
    if (props.favorites) {
      try {
        const stringStore = JSON.stringify(props.favorites);
        localStorage.setItem("favs", stringStore);
      } catch (e) {
        console.log(e);
      }
    }
  }, [props.favorites]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: "15px" }}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">OMDB</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/movies">Movies</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/favorites">Favorites</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  props.fetchMovies(search);
                  props.history.push("/movies");
                }}
              >
                <Button
                  color="primary"
                  size="sm"
                  style={{ marginTop: "5px", marginLeft: "5px" }}
                >
                  SEARCH
                </Button>
                <div style={{ float: "right" }}>
                  <input
                    placeholder="Enter movie or show name"
                    onChange={e => {
                      setSearch(e.target.value);
                    }}
                    style={{ marginTop: "6px" }}
                  />
                </div>
              </form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = ({ movies, selectedMovie, favorites }) => ({
  movies,
  selectedMovie,
  favorites
});

const mapDispatchToProps = { fetchMovies, persistFavs };
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
