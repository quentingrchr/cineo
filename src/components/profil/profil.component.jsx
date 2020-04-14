import React from 'react';
import { ReactComponent as Dot } from '../../assets/svg/bluedot.svg';
import { ReactComponent as Edit } from '../../assets/svg/edit.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import { ReactComponent as GreyDot } from '../../assets/svg/greydot.svg';
import { ReactComponent as Visa } from '../../assets/svg/visa.svg';
import { SessionContextConsumer } from '../../context/session.context';
import { Link } from 'react-router-dom';

export default class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
    };
  }

  hideAlert = () => {
    this.setState({ alertVisible: false });
    console.log('click1');
  };

  showAlert = () => {
    this.setState({ alertVisible: true });
    console.log('click');
  };

  render() {
    const { alertVisible } = this.state;
    return (
      <SessionContextConsumer>
        {({ user, deleteUser }) => (
          <div>
            <div className='profil'>
              <div className='profil__left'>
                <div className='profil__first'>
                  <div className='profil__title title'>
                    <div className='profil__title title--name'>
                      <Dot />
                      <h1>Mon profil</h1>
                    </div>
                    <Edit className='edit' />
                  </div>
                  <div className='profil__information'>
                    <div className='profil__information--left'>
                      <img
                        className='profil__img'
                        src='https://occ-0-4164-768.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUTMshYC3Z2g_SQr_f7tJHLaQZOkuKg63U8DlRTxu3cb78sui7ZRKVSXppNQzfQIvCmomBCHvEaIXVsyypFNVoHLcC_s.webp?r=534&quot'
                        alt='deux personnes à la plage'
                      />
                    </div>
                    <div className='profil__information--right'>
                      <p>{user.pseudo}</p>
                      <p>{`Abonné depuis le ${user.signUpDate}`}</p>
                      <div className='profil__stat'>
                        <div>Voir mes stats</div>
                        <Arrow className='profil__arrow' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='second'>
                  <div className='second__title title'>
                    <div className='second__title title--name'>
                      <Dot />
                      <h1>Coordonees</h1>
                    </div>
                    <Edit className='edit' />
                  </div>
                  <div className='second__information'>
                    <div className='second__info '>
                      <p>Nom</p>
                      <p>prénom</p>
                      <p>Email</p>
                    </div>
                    <div className='second__answer '>
                      <p>{user.lastName}</p>
                      <p>{user.name}</p>
                      <p>{user.mail}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='profil__right'>
                <div className='third'>
                  <div className='third__title title '>
                    <div className='third__title title--name'>
                      <Dot />
                      <h1>Abonnement & Facturation</h1>
                    </div>
                  </div>
                  <div className='third__info'>
                    <p>Détail du forfait : ULTRA PREMIUM HD</p>
                    <div>Changer de forfait</div>
                  </div>
                  <div className='third__info'>
                    <p>
                      <Visa />
                      <span></span>
                      <GreyDot />
                      <GreyDot />
                      <GreyDot />
                      <GreyDot />
                      <span></span>
                      <GreyDot />
                      <GreyDot />
                      <GreyDot />
                      <GreyDot />
                      <span></span>
                      <GreyDot />
                      <GreyDot />
                      <GreyDot />
                      <GreyDot />
                      <span></span>
                      1456
                    </p>

                    <div>Modifier ma carte</div>
                  </div>
                  <div className='third__info'>
                    <p>Prochaine facturation : 26 avril 2020</p>
                  </div>
                </div>

                <div className='fourth'>
                  <div className='fourth__title title'>
                    <div className='title--name'>
                      <Dot />
                      <h1>Parametres</h1>
                    </div>
                  </div>
                  <div className='fourth__links'>
                    <div>
                      Gérer les appareils autorisés pour le téléchargement
                    </div>
                    <div>Activer un appareil</div>
                    <div>Se déconnecter de tous les appareils</div>
                  </div>
                  <button
                    className='fourth__button'
                    onClick={() => this.showAlert()}
                  >
                    Résilier l'abonnement
                  </button>
                </div>
                {alertVisible && (
                  <div className='alert' onClick={() => this.hideAlert()}>
                    <div>
                      <p>
                        Vous êtes sur le point se supprimer votre compte et
                        toutes les données qui y sont enregistrées
                      </p>
                      <Link to='/'>
                        <button
                          className='fourth__button'
                          onClick={() => deleteUser()}
                        >
                          Résilier l'abonnement
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </SessionContextConsumer>
    );
  }
}
