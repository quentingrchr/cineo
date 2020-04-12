import React from 'react';
import { PlayerContextConsumer } from '../../player.context';

export default class Exit extends React.Component {
  render() {
    return (
      <PlayerContextConsumer>
        {({ exitRef, isContolerVisible }) => (
          <div
            className={`player__close ${
              isContolerVisible ? '' : 'is-invisible'
            }`}
            ref={exitRef}
          >
            <div></div>
            <p>Retour</p>
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
