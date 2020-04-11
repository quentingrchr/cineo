import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignInUpPage from "./pages/sign-in-up/sign-in-up.page";
import MoviesPage from "./pages/movies/movies.page";
import SeriesPage from "./pages/series/series.page";

import "./styles.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-up-in" component={SignInUpPage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/series" component={SeriesPage} />
      </Switch>
    </Router>
  );
}

export default App;
