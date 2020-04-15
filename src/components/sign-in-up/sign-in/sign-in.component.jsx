import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SessionContextConsumer } from '../../../context/session.context';

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

    return (
      <SessionContextConsumer>
        {({ signIn, changeWarningStates, wrongLogin }) => (
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
            <form
              className='registerbox__content'
              onSubmit={(e) => signIn(mailValue, passwordValue, e)}
            >
              <input
                className='registerbox__input1 registerbox__input'
                type='email'
                placeholder='E-mail'
                onChange={this.handelChangeMail}
                onFocus={changeWarningStates}
                required
              ></input>
              <input
                className='registerbox__input2 registerbox__input'
                type='password'
                placeholder='Mot de passe'
                onChange={this.handelChangePassword}
                required
              ></input>

              <input
                className='submit__sign-in'
                type='submit'
                value='Connexion'
                disabled={mailValue.length === 0 || passwordValue.length === 0}
              ></input>
              <Link to='/'>
                <p className='registerbox__withoutlogin'>
                  Accéder au site sans compte
                </p>
              </Link>
            </form>
            {wrongLogin && (
              <div className='wrongLogin'>Email ou mot de passe invalides</div>
            )}
          </div>
        )}
      </SessionContextConsumer>
    );
  }
}
