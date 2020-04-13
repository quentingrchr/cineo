import React from 'react';

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
      isMailAlreadyExist: false,
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
    console.log(this.state.isMailvalid);
  };

  checkPassword = () => {
    this.state.passwordValue === this.state.confirmPasswordValue
      ? this.setState({ isPasswordvalid: true })
      : this.setState({ isPasswordvalid: false });
    console.log(this.state.isPasswordvalid);
  };

  handelSubmit = (e) => {
    e.preventDefault();

    let datas = {};

    datas.name = this.state.lastnameValue;
    datas.firstName = this.state.firstnameValue;
    datas.mail = this.state.mailValue;
    datas.password = this.state.passwordValue;

    fetch('http://18.191.118.60:80/signUp.php', {
      method: 'POST',
      body: JSON.stringify(datas),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.message) {
          this.setState({ isMailAlreadyExist: true });
        }
      });
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
      isMailAlreadyExist,
    } = this.state;

    console.log(isMailAlreadyExist);

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
        <form className='signup__form' onSubmit={this.handelSubmit}>
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
      </div>
    );
  }
}
