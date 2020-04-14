import React, { createContext, Component } from 'react';

const SessionContext = createContext({});

export class SessionContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      mailAlreadyExist: false,
      wrongLogin: false,
      movieList: null,
    };
  }

  componentDidMount() {
    console.log(JSON.parse(localStorage.getItem('user')));
    console.log(JSON.parse(localStorage.getItem('moviesList')));
    if (localStorage.getItem('user')) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) });
    }
    if (localStorage.getItem('moviesList')) {
      this.setState({
        movieList: JSON.parse(localStorage.getItem('moviesList')),
      });
    }
  }

  signIn = (mail, password, e) => {
    e.preventDefault();
    let infosUsers = {};
    infosUsers.mail = mail;
    infosUsers.password = password;

    fetch('http://18.191.118.60:80/signIn.php', {
      method: 'POST',
      body: JSON.stringify(infosUsers),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          let userloged = {
            id: data.infos[0].id,
            name: data.infos[0].name,
            lastName: data.infos[0].last_name,
            pseudo: data.infos[0].pseudo,
            mail: data.infos[0].mail,
            signUpDate: data.infos[0].date_inscription,
          };
          this.setState({ user: userloged });
          localStorage.setItem('user', JSON.stringify(userloged));

          let userId = {};
          userId.id = data.infos[0].id;
          fetch('http://18.191.118.60:80/getMoviesList.php', {
            method: 'POST',
            body: JSON.stringify(userId),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              if (data.length > 0) {
                let movieList = [];
                data.forEach((movie) => {
                  movieList.push(movie.id_movie);
                });
                this.setState({ movieList: movieList });
                localStorage.setItem('moviesList', JSON.stringify(movieList));
                console.log(JSON.parse(localStorage.getItem('moviesList')));
              }
            });
        } else {
          this.setState({ wrongLogin: true });
        }
      });
  };

  signUp = (name, firstName, mail, password, pseudo, e) => {
    e.preventDefault();

    let data = {};

    data.name = name;
    data.firstName = firstName;
    data.mail = mail;
    data.password = password;
    data.pseudo = pseudo;

    fetch('http://18.191.118.60:80/signUp.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message) {
          this.setState({ mailAlreadyExist: true });
        } else {
          let userLoged = {
            id: data.user[0].id,
            name: data.user[0].name,
            lastName: data.user[0].last_name,
            pseudo: data.user[0].pseudo,
            mail: data.user[0].mail,
            signUpDate: data.user[0].date_inscription,
          };
          localStorage.setItem('user', JSON.stringify(userLoged));
          console.log(JSON.parse(localStorage.getItem('user')));
        }
      });
  };

  changeWarningStates = () => {
    this.setState({ mailAlreadyExist: false, wrongLogin: false });
  };

  deleteUser = () => {
    let data = {};
    data.mail = this.state.user.mail;

    fetch('http://18.191.118.60:80/deleteUser.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ user: null });
        localStorage.removeItem('user');
        localStorage.removeItem('moviesList');
      });
  };

  logOut = () => {
    this.setState({ user: null, movieList: null });
    localStorage.removeItem('user');
    localStorage.removeItem('moviesList');
  };

  addMovie = (filmId) => {
    let data = {};
    data.idUser = this.state.user.id;
    data.idFilm = filmId.toString();

    fetch('http://18.191.118.60:80/addFilm.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let movieList = [];
        data.forEach((movie) => {
          movieList.push(movie.id_movie);
        });
        this.setState({ movieList: movieList });
        localStorage.setItem('moviesList', JSON.stringify(movieList));
      });
  };

  render() {
    const value = {
      ...this.state,
      signIn: this.signIn,
      signUp: this.signUp,
      changeWarningStates: this.changeWarningStates,
      deleteUser: this.deleteUser,
      logOut: this.logOut,
      addMovie: this.addMovie,
    };

    return (
      <SessionContext.Provider value={value}>
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export const SessionContextConsumer = SessionContext.Consumer;
