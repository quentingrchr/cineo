import React from 'react';
import SignIn from './sign-in/sign-in.component';
import SignUp from './sign-up/sign-up.component';

export default class SignInUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  signInClick = () => {
    this.setState({ login: false });
  };

  signUpClick = () => {
    this.setState({ login: true });
  };

  render() {
    const { login } = this.state;
    return (
      <div className='register'>
        <div className='register__title'>
          <h1>Bienvenue sur Ciné</h1>
          <span>o</span>
        </div>
        {login && <SignIn click={this.signInClick} />}
        {!login && <SignUp click={this.signUpClick} />}
      </div>
    );
  }
}
