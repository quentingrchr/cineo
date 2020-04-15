import React from 'react';
import { Link } from 'react-router-dom';
import { SessionContextConsumer } from '../../context/session.context';

export default function HeaderPres() {
  return (
    <SessionContextConsumer>
      {({ user }) => (
        <div className='headerpres__container'>
          <div className='headerpres'>
            <div className='cta__subscribe cta'>
              <a href='#offers'>Souscrire à une offre</a>
            </div>
            <div className='cta__connection cta'>
              <div>
                {!user ? (
                  <Link to='/sign-in-up'>Connexion</Link>
                ) : (
                  <Link to='/profil'>Mon Compte</Link>
                )}
              </div>
            </div>
          </div>
          <div className='headerpres__background'></div>
        </div>
      )}
    </SessionContextConsumer>
  );
}
