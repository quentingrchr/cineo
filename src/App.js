import React from 'react';
import Header from './components/header/header.component';
import Button from './components/button/button.component';
import Login from './components/login/login.component';
import Signup from './components/signup/signup.component';
import './styles.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <h1>Work In Progress</h1>
      <Button />
      <Signup />
    </div>
  );
}

export default App;
