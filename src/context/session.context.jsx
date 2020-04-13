import React, { createContext, Component, createRef } from 'react';

const SessionContext = createContext({});

export class SessionContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      mailAlreadyExist: false,
      wrongLogin: false,
    };
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
        console.log(data);
        if (data.succes) {
          this.setState({
            user: {
              name: data.infos[0].name,
              lastName: data.infos[0].last_name,
              mail: data.infos[0].mail,
              signUpDate: data.infos[0].date_inscription,
            },
          });
        } else {
          this.setState({ wrongLogin: true });
        }
        console.log(this.state.user);
      });
  };

  signUp = (name, firstName, mail, password, e) => {
    e.preventDefault();

    let datas = {};

    datas.name = name;
    datas.firstName = firstName;
    datas.mail = mail;
    datas.password = password;

    fetch('http://18.191.118.60:80/signUp.php', {
      method: 'POST',
      body: JSON.stringify(datas),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message) {
          this.setState({ mailAlreadyExist: true });
        }
      });
  };

  changeWarningStates = () => {
    this.setState({ mailAlreadyExist: false, wrongLogin: false });
  };

  render() {
    const value = {
      ...this.state,
      signIn: this.signIn,
      signUp: this.signUp,
      changeWarningStates: this.changeWarningStates,
    };
    console.log(value.wrongLogin);

    return (
      <SessionContext.Provider value={value}>
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export const SessionContextConsumer = SessionContext.Consumer;
