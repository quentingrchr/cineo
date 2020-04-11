import React from 'react';
import { PlayerContextConsumer } from '../../player.context';

export default class Exit extends React.Component {
  render() {
    return (
      <PlayerContextConsumer>
        {({ exitRef }) => (
          <div className='player__close' ref={exitRef}>
            <div></div>
            <p>retour</p>
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
