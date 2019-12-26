import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import Movies from "./Movies";
import Favorites from "./Favorites";
import Movie from "./Movie";

export default function Main() {
  return (
    <div>
      <Route render={({ history }) => <NavBar history={history} />} />

      <Switch>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/movies/:movieID" component={Movie} />
        <Redirect from="/" to="/movies" />
      </Switch>
    </div>
  );
}
