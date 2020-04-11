import React from 'react';
import video from './assets/video/video.mp4';
import Header from './components/header/header.component';
import Button from './components/button/button.component';
import Player from './components/player/player.component';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: video,
    };
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <h1>Work In Progress</h1>
        <Button />
        <Player source={this.state.source} />
      </div>
    );
  }
}

export default App;
