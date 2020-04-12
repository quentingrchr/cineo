import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailValue: '',
      passwordValue: '',
      lastnameValue: '',
      firstnameValue: '',
      dateValue: '',
      civilityValue: '',
    };
  }
  handelClick = () => this.props.click();

  handelChangeMail = (e) => {
    this.setState({ mailValue: e.target.value });
  };

  handelChangePassword = (e) => {
    this.setState({ passwordValue: e.target.value });
  };

  handelChangeLastname = (e) => {
    this.setState({ lastnameValue: e.target.value });
  };

  handelChangeFirstname = (e) => {
    this.setState({ firstnameValue: e.target.value });
  };

  handelChangeDate = (e) => {
    this.setState({ dateValue: e.target.value });
  };

  hendelChangeCivility = (e) => {
    this.setState({ civilityValue: e.target.value });
  };

  render() {
    return (
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
        <form className='signup__form'>
          <div className='form__part form__left'>
            <div className='form__left__civility form__component'>
              <p>Civilité</p>
              <label for='mr'>Mr</label>
              <input
                type='radio'
                id='mr'
                value='mr'
                name='civility'
                checked
              ></input>
              <label for='mme'>Mme</label>
              <input type='radio' id='mme' value='mme' name='civility'></input>
            </div>
            <div className='form__left__lastname form__component'>
              <p>Nom</p>
              <input
                type='text'
                placeholder=''
                onChange={this.handelChangeLastname}
              ></input>
            </div>
            <div className='form__left__firstname form__component'>
              <p>Prénom</p>
              <input
                type='text'
                placeholder=''
                onChange={this.handelChangeFirstname}
              ></input>
            </div>
            <div className='form__left__birthdate form__component'>
              <p>Date de naissance</p>
              <input type='date' onChange={this.handelChangeDate}></input>
            </div>
          </div>
          <div className='form__part form__right'>
            <div className='form__right__email form__component'>
              <p>Email</p>
              <input
                type='text'
                placeholder='exemple@abc.com'
                onChange={this.handelChangeMail}
              ></input>
            </div>
            <div className='form__right__emailconf form__component'>
              <p>Confirmer votre e-mail</p>
              <input
                type='text'
                placeholder='exemple@abc.com'
                onChange={this.handelChangePassword}
              ></input>
            </div>
            <div className='form__right__password form__component'>
              <p>Mot de passe</p>
              <input
                type='password'
                placeholder=''
                onChange={this.handelChangePassword}
              ></input>
            </div>
            <div className='form__right__passwordconf form__component'>
              <p>Confirmer votre mot de passe</p>
              <input
                type='password'
                onChange={this.handelChangePassword}
              ></input>
            </div>
          </div>
        </form>
        <div className='ctas'>
          <input type='submit'></input>
          <input type='reset'></input>
        </div>
      </div>
    );
  }
}
