import React from 'react';
import { SessionContextConsumer } from '../../../context/session.context';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailValue: '',
      confirmMailValue: '',
      passwordValue: '',
      confirmPasswordValue: '',
      lastnameValue: '',
      firstnameValue: '',
      isMailvalid: true,
      isPasswordvalid: true,
    };
  }
  handelClick = () => this.props.click();

  handelChangeMail = (e) => {
    this.setState({ mailValue: e.target.value });
  };

  handelChangeConfirmMail = (e) => {
    this.setState({ confirmMailValue: e.target.value });
  };

  handelChangePassword = (e) => {
    this.setState({ passwordValue: e.target.value });
  };

  handelChangeConfirmPassword = (e) => {
    this.setState({ confirmPasswordValue: e.target.value });
  };

  handelChangeLastname = (e) => {
    this.setState({ lastnameValue: e.target.value });
  };

  handelChangeFirstname = (e) => {
    this.setState({ firstnameValue: e.target.value });
  };

  checkMail = () => {
    this.state.mailValue === this.state.confirmMailValue
      ? this.setState({ isMailvalid: true })
      : this.setState({ isMailvalid: false });
  };

  checkPassword = () => {
    this.state.passwordValue === this.state.confirmPasswordValue
      ? this.setState({ isPasswordvalid: true })
      : this.setState({ isPasswordvalid: false });
  };

  render() {
    const {
      mailValue,
      confirmMailValue,
      passwordValue,
      confirmPasswordValue,
      lastnameValue,
      firstnameValue,
      isMailvalid,
      isPasswordvalid,
    } = this.state;

    return (
      <SessionContextConsumer>
        {({ signUp, changeWarningStates, mailAlreadyExist }) => (
          <div className='signup__content'>
            <div className='signup__nav'>
              <div
                className='signup__nav--signin'
                onClick={() => this.handelClick()}
              >
                <p>Se connecter</p>
              </div>
              <div className='signup__nav--signup'>
                <p>Créer un compte</p>
              </div>
            </div>
            <form
              className='signup__form'
              onSubmit={(e) =>
                signUp(
                  lastnameValue,
                  firstnameValue,
                  mailValue,
                  passwordValue,
                  e
                )
              }
            >
              <div className='form__content'>
                <div className='form__part form__left'>
                  <div className='form__left__lastname form__component'>
                    <p>Nom</p>
                    <input
                      type='text'
                      placeholder=''
                      value={lastnameValue}
                      onChange={this.handelChangeLastname}
                    ></input>
                  </div>
                  <div className='form__left__firstname form__component'>
                    <p>Prénom</p>
                    <input
                      type='text'
                      placeholder=''
                      value={firstnameValue}
                      onChange={this.handelChangeFirstname}
                    ></input>
                  </div>
                  <div className='form__right__email form__component'>
                    <p>Email</p>
                    <input
                      type='text'
                      placeholder='exemple@abc.com'
                      value={mailValue}
                      onChange={this.handelChangeMail}
                      onFocus={changeWarningStates}
                    ></input>
                  </div>
                </div>
                <div className='form__part form__right'>
                  <div className='form__right__emailconf form__component'>
                    <p>Confirmer votre e-mail</p>
                    <input
                      type='text'
                      placeholder='exemple@abc.com'
                      value={confirmMailValue}
                      onChange={this.handelChangeConfirmMail}
                      onBlur={this.checkMail}
                    ></input>
                    {!isMailvalid && <div class='warning'>Mail invalide</div>}
                  </div>
                  <div className='form__right__password form__component'>
                    <p>Mot de passe</p>
                    <input
                      type='password'
                      value={passwordValue}
                      onChange={this.handelChangePassword}
                    ></input>
                  </div>
                  <div className='form__right__passwordconf form__component'>
                    <p>Confirmer votre mot de passe</p>
                    <input
                      type='password'
                      value={confirmPasswordValue}
                      onChange={this.handelChangeConfirmPassword}
                      onBlur={this.checkPassword}
                    ></input>
                    {!isPasswordvalid && (
                      <div className='warning'>Mot de passe invalide</div>
                    )}
                  </div>
                </div>
              </div>
              <input
                className='submit'
                type='submit'
                disabled={
                  (!isMailvalid && !isPasswordvalid) ||
                  mailValue.length === 0 ||
                  passwordValue.length === 0 ||
                  lastnameValue.length === 0 ||
                  firstnameValue.length === 0
                }
              ></input>
            </form>
            {mailAlreadyExist && (
              <div className='mailError'>
                Cette adresse mail est déjà ratachée à un compte
              </div>
            )}
          </div>
        )}
      </SessionContextConsumer>
    );
  }
}
