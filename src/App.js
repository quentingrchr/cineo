import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/scroll-to-the-top/scroll-to-the-top.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.page';
import MoviesPage from './pages/movies/movies.page';
import SeriesPage from './pages/series/series.page';
import MyListPage from './pages/my-list/my-list.page';
import HomePage from './pages/home/home.page';
import ProfilPage from './pages/profil/profil.pages';
import DevQuentin from './pages/dev-quentin/dev-quentin';
import PlayerPage from './pages/player/player.page';
import Footer from './pages/footer/footer.page';
import PresPage from './pages/prespage/prespage.page';

import './styles.scss';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />

      <Switch>
        <Route exact path='/dev-quentin' component={DevQuentin} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/pres' component={PresPage} />
        <Route exact path='/sign-in-up' component={SignInUpPage} />
        <Route exact path='/movies' component={MoviesPage} />
        <Route exact path='/series' component={SeriesPage} />
        <Route exact path='/my-list' component={MyListPage} />
        <Route exact path='/profil' component={ProfilPage} />
        <Route exact path='/player' component={PlayerPage} />
        <Route exact path='/footer' component={Footer} />
      </Switch>
    </Router>
  );
}

export default App;
