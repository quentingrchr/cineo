import React from 'react';

export default function SignIn() {
    return (
       <div className='login__container login'>
            <div className='login__title'>
                <h1>Bienvenue sur Ciné</h1>
                <span>o</span>
            </div>
            <div className='registerbox__container registerbox'>
                <div className='registerbox__nav'>
                    <div className='registerbox__nav--signin'>
                        <p>Se connecter</p>
                    </div>
                    <div className='registerbox__nav--signup'>
                        <p>Créer un compte</p>
                    </div>
                </div>
                <div className='registerbox__content'>
                    <input className='registerbox__input1 registerbox__input' type='text' placeholder='E-mail'></input>
                    <input className='registerbox__input2 registerbox__input' type='password' placeholder='Mot de passe'></input>
                    <div className='registerbox__cta'>
                        <p>Connexion</p>
                    </div>
                    <p className='registerbox__withoutlogin'>Accéder au site sans compte</p>
                </div>
            </div>
        </div>
    );
}