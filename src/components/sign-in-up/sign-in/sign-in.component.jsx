import React from "react";
import { Link } from "react-router-dom";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      mailValue: '',
      passwordValue: '',
      isConnected: false,

    };
  }

  handelChangeMail = e => {
    this.setState({ mailValue: e.target.value });
  };
  handelChangePassword = e => {
    this.setState({ passwordValue: e.target.value });
  };

  handelClick = () => {
    this.props.click();
  };

  handelSubmit = (e) => {
    e.preventDefault();

    let infosUsers = {};
    infosUsers.mail = this.state.mailValue;
    infosUsers.password = this.state.passwordValue;

    fetch('http://18.191.118.60:80/signIn.php', {
      method: 'POST',
      body: JSON.stringify(infosUsers),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.success
          ? this.setState({ isConnected: true })
          : this.setState({ isConnected: false });
      });
  };

  render() {
    const { mailValue, passwordValue, isConnected } = this.state;
    console.log(isConnected);

    return (
      <div className="registerbox__container registerbox">
        <div className="registerbox__nav">
          <div className="registerbox__nav--signin">
            <p>Se connecter</p>
          </div>
          <div
            className="registerbox__nav--signup"
            onClick={() => this.handelClick()}
          >
            <p>Créer un compte</p>
          </div>
        </div>
        <form className='registerbox__content' onSubmit={this.handelSubmit}>
          <input
            className="registerbox__input1 registerbox__input"
            type="text"
            placeholder="E-mail"
            onChange={this.handelChangeMail}
          ></input>
          <input
            className="registerbox__input2 registerbox__input"
            type="password"
            placeholder="Mot de passe"
            onChange={this.handelChangePassword}
          ></input>

          <input
            className='submit'
            type='submit'
            value='connexion'
            disabled={mailValue.length === 0 || passwordValue.length === 0}
          ></input>
          <Link to='/home'>
            <p className='registerbox__withoutlogin'>
              Accéder au site sans compte
            </p>
          </Link>
        </form>
      </div>
    );
  }
}
