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
      pseudoValue: '',
      isMailValid: true,
      isMailConfirmationValid: true,
      isPasswordvalid: true,
    };
  }
  handleClick = () => this.props.click();

  handleChangeMail = (e) => {
    this.setState({ mailValue: e.target.value });
  };

  handleChangeConfirmMail = (e) => {
    this.setState({ confirmMailValue: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ passwordValue: e.target.value });
  };

  handleChangeConfirmPassword = (e) => {
    this.setState({ confirmPasswordValue: e.target.value });
  };

  handleChangeLastname = (e) => {
    this.setState({ lastnameValue: e.target.value });
  };

  handleChangeFirstname = (e) => {
    this.setState({ firstnameValue: e.target.value });
  };

  handleChangePseudo = (e) => this.setState({ pseudoValue: e.target.value });

  checkMail = () => {
    /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i.test(this.state.mailValue)
      ? this.setState({ isMailValid: true })
      : this.setState({ isMailValid: false });
  };

  checkMailConfirmation = () => {
    this.state.mailValue === this.state.confirmMailValue
      ? this.setState({ isMailConfirmationValid: true })
      : this.setState({ isMailConfirmationValid: false });
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
      pseudoValue,
      isMailValid,
      isMailConfirmationValid,
      isPasswordvalid,
    } = this.state;

    /* console.log(
      !isMailConfirmationValid &&
        !isPasswordvalid &&
        mailValue.length === 0 &&
        passwordValue.length === 0 &&
        lastnameValue.length === 0 &&
        
    ); */
    console.log(!isMailConfirmationValid);

    return (
      <SessionContextConsumer>
        {({ signUp, changeWarningStates, mailAlreadyExist }) => (
          <div className='signup__content'>
            <div className='signup__nav'>
              <div
                className='signup__nav--signin'
                onClick={() => this.handleClick()}
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
                  pseudoValue,
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
                      value={lastnameValue}
                      onChange={this.handleChangeLastname}
                      required
                    ></input>
                  </div>
                  <div className='form__left__firstname form__component'>
                    <p>Prénom</p>
                    <input
                      type='text'
                      value={firstnameValue}
                      onChange={this.handleChangeFirstname}
                      required
                    ></input>
                  </div>
                  <div className='form__left__pseudo form__component'>
                    <p>Pseudo</p>
                    <input
                      type='text'
                      onChange={this.handleChangePseudo}
                      required
                    ></input>
                  </div>
                </div>
                <div className='form__part form__right'>
                  <div className='form__right__email form__component'>
                    <p>Email</p>
                    <input
                      type='email'
                      placeholder='exemple@abc.com'
                      value={mailValue}
                      onChange={this.handleChangeMail}
                      onFocus={changeWarningStates}
                      onBlur={this.checkMail}
                      required
                    ></input>
                    {!isMailValid && (
                      <div class='warning'>Adresse mail incorrecte</div>
                    )}
                  </div>
                  <div className='form__right__emailconf form__component'>
                    <p>Confirmer votre e-mail</p>
                    <input
                      type='text'
                      placeholder='exemple@abc.com'
                      value={confirmMailValue}
                      onChange={this.handleChangeConfirmMail}
                      onBlur={this.checkMailConfirmation}
                      required
                    ></input>
                    {!isMailConfirmationValid && (
                      <div className='warning'>Adresses mail différentes</div>
                    )}
                  </div>
                  <div className='form__right__password form__component'>
                    <p>Mot de passe</p>
                    <input
                      type='password'
                      value={passwordValue}
                      onChange={this.handleChangePassword}
                      required
                    ></input>
                  </div>
                  <div className='form__right__passwordconf form__component'>
                    <p>Confirmer votre mot de passe</p>
                    <input
                      type='password'
                      value={confirmPasswordValue}
                      onChange={this.handleChangeConfirmPassword}
                      onBlur={this.checkPassword}
                      required
                    ></input>
                    {!isPasswordvalid && (
                      <div className='warning'>Mot de passe invalide</div>
                    )}
                  </div>
                </div>
              </div>
              <input
                className='submit__sign-up'
                type='submit'
                disabled={
                  !isMailConfirmationValid ||
                  !isPasswordvalid ||
                  !isMailValid ||
                  confirmMailValue.length === 0 ||
                  confirmPasswordValue.length === 0 ||
                  passwordValue.length === 0 ||
                  pseudoValue.length === 0 ||
                  mailValue.length === 0 ||
                  lastnameValue.length === 0 ||
                  firstnameValue.length === 0
                }
              ></input>
              {mailAlreadyExist && (
                <span className='mailError'>
                  Cette adresse mail est déjà ratachée à un compte
                </span>
              )}
            </form>
          </div>
        )}
      </SessionContextConsumer>
    );
  }
}
