import React from 'react';
import { Link } from 'react-router-dom';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailValue: '',
      passwordValue: '',
    };
  }

  handelChangeMail = (e) => {
    this.setState({ mailValue: e.target.value });
  };
  handelChangePassword = (e) => {
    this.setState({ passwordValue: e.target.value });
  };

  handelClick = () => {
    this.props.click();
  };

  render() {
    const { mailValue, passwordValue } = this.state;
    console.log(passwordValue);
    console.log(mailValue);

    return (
      <div className='registerbox__container registerbox'>
        <div className='registerbox__nav'>
          <div className='registerbox__nav--signin'>
            <p>Se connecter</p>
          </div>
          <div
            className='registerbox__nav--signup'
            onClick={() => this.handelClick()}
          >
            <p>Créer un compte</p>
          </div>
        </div>
        <div className='registerbox__content'>
          <input
            className='registerbox__input1 registerbox__input'
            type='text'
            placeholder='E-mail'
            onChange={this.handelChangeMail}
          ></input>
          <input
            className='registerbox__input2 registerbox__input'
            type='password'
            placeholder='Mot de passe'
            onChange={this.handelChangePassword}
          ></input>
          <div className='registerbox__cta'>
            <p>Connexion</p>
          </div>
          <Link to='/home'>
            <p className='registerbox__withoutlogin'>
              Accéder au site sans compte
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
