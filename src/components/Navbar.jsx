import React, { useState } from "react";
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

import { fetchMovies } from "../store/actions/index";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
                <Button color="primary" size="sm">
                  SEARCH
                </Button>
                <input
                  placeholder="Enter movie or show name"
                  onChange={e => {
                    setSearch(e.target.value);
                  }}
                />
              </form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = { fetchMovies };
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
