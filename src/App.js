import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignInPage from "./pages/sign-in/sign-in.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import MoviesPage from "./pages/movies/movies.page";
import SeriesPage from "./pages/series/series.page";
import MyListPage from "./pages/my-list/my-list.page";
import HomePage from "./pages/home/home.page";

import ProfilPage from "./pages/profil/profil.pages";

import DevQuentin from "./pages/dev-quentin/dev-quentin";
import PlayerPage from "./pages/player/player.page";


import "./styles.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dev-quentin" component={DevQuentin} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/series" component={SeriesPage} />
        <Route exact path="/my-list" component={MyListPage} />

        <Route exact path="/profil" component={ProfilPage} />

        <Route exact path="/player" component={PlayerPage} />

      </Switch>
    </Router>
  );
}

export default App;
