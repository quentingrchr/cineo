import React from 'react';
import Header from './components/header/header.component';
import Button from './components/button/button.component';
import './styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <h1>Work In Progress</h1>
        <Button />
      </div>
    );
  }
}

export default App;
