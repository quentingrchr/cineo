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
          this.setState({ user: userLoged });
          localStorage.setItem('user', JSON.stringify(userLoged));
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

  deleteMovie = (id_movie) => {
    let data = {};
    data.movieId = id_movie.toString();
    data.userId = this.state.user.id;

    fetch('http://18.191.118.60:80/deleteMovie.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let movieList = [];
        data.forEach((movie) => {
          movieList.push(movie.id_movie);
        });
        this.setState({ movieList: movieList });
        localStorage.setItem('moviesList', JSON.stringify(movieList));
      });
  };

  changePseudo = (pseudo) => {
    let data = {};
    data.id = this.state.user.id;
    data.value = pseudo;

    fetch('http://18.191.118.60:80/changePseudo.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userLoged = {
          id: data[0].id,
          name: data[0].name,
          lastName: data[0].last_name,
          pseudo: data[0].pseudo,
          mail: data[0].mail,
          signUpDate: data[0].date_inscription,
        };
        this.setState({ user: userLoged });
        localStorage.setItem('user', JSON.stringify(userLoged));
      });
  };

  changeLastName = (lastName) => {
    let data = {};
    data.id = this.state.user.id;
    data.value = lastName;

    fetch('http://18.191.118.60:80/changeLastName.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let userLoged = {
          id: data[0].id,
          name: data[0].name,
          lastName: data[0].last_name,
          pseudo: data[0].pseudo,
          mail: data[0].mail,
          signUpDate: data[0].date_inscription,
        };
        this.setState({ user: userLoged });
        localStorage.setItem('user', JSON.stringify(userLoged));
      });
  };

  changeFirstName = (firstName) => {
    let data = {};
    data.id = this.state.user.id;
    data.value = firstName;

    fetch('http://18.191.118.60:80/changeFirstName.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userLoged = {
          id: data[0].id,
          name: data[0].name,
          lastName: data[0].last_name,
          pseudo: data[0].pseudo,
          mail: data[0].mail,
          signUpDate: data[0].date_inscription,
        };
        this.setState({ user: userLoged });
        localStorage.setItem('user', JSON.stringify(userLoged));
      });
  };

  changeMail = (mail) => {
    let data = {};
    data.id = this.state.user.id;
    data.value = mail;

    fetch('http://18.191.118.60:80/changeMail.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userLoged = {
          id: data[0].id,
          name: data[0].name,
          lastName: data[0].last_name,
          pseudo: data[0].pseudo,
          mail: data[0].mail,
          signUpDate: data[0].date_inscription,
        };
        this.setState({ user: userLoged });
        localStorage.setItem('user', JSON.stringify(userLoged));
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
      deleteMovie: this.deleteMovie,
      changePseudo: this.changePseudo,
      changeLastName: this.changeLastName,
      changeFirstName: this.changeFirstName,
      changeMail: this.changeMail,
    };

    return (
      <SessionContext.Provider value={value}>
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export const SessionContextConsumer = SessionContext.Consumer;
