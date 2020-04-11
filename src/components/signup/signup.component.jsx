import React from 'react';

export default function Signup() {
  return (
    <div className='signup__container signup'>
      <div className='signup__title'>
        <h1>Bienvenue sur Ciné</h1>
        <span>o</span>
      </div>
      <div className='signup__content'>
        <div className='signup__nav'>
          <div className='signup__nav--signin'>
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
              <input type='radio' id='mr' checked></input>
              <label for='mme'>Mme</label>
              <input type='radio' id='mme'></input>
            </div>
            <div className='form__left__lastname form__component'>
              <p>Nom</p>
              <input type='text' placeholder=''></input>
            </div>
            <div className='form__left__firstname form__component'>
              <p>Prénom</p>
              <input type='text' placeholder=''></input>
            </div>
            <div className='form__left__birthdate form__component'>
              <p>Date de naissance</p>
              <input type='date'></input>
            </div>
          </div>
          <div className='form__part form__right'>
            <div className='form__right__email form__component'>
              <p>Email</p>
              <input type='text'></input>
            </div>
            <div className='form__right__emailconf form__component'>
              <p>Confirmer votre e-mail</p>
              <input type='text' placeholder=''></input>
            </div>
            <div className='form__right__password form__component'>
              <p>Mot de passe</p>
              <input type='password' placeholder=''></input>
            </div>
            <div className='form__right__passwordconf form__component'>
              <p>Confirmer votre mot de passe</p>
              <input type='password'></input>
            </div>
          </div>
        </form>
        <div className='ctas'>
          <input type='submit'></input>
          <input type='reset'></input>
        </div>
      </div>
    </div>
  );
}