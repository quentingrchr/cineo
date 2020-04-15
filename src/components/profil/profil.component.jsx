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
      new__pseudo: '',
      new__lastname: '',
      new__firstname: '',
      new__mail: '',
      pseudoFormVisible: false,
      nameFormVisible: false,
      firstnameFormVisible: false,
      mailFormVisible: false,
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

  handelClick = (elt) => {
    if (elt === 'pseudo') this.setState({ pseudoFormVisible: true });
    else if (elt === 'name') this.setState({ nameFormVisible: true });
    else if (elt === 'firstname') this.setState({ firstnameFormVisible: true });
    else if (elt === 'mail') this.setState({ mailFormVisible: true });
  };

  handleChangeNewMail = (e) => {
    this.setState({ new__mail: e.target.value });
  };

  handleChangeNewLastname = (e) => {
    this.setState({ new__lastname: e.target.value });
  };

  handleChangeNewFirstname = (e) => {
    this.setState({ new__firstname: e.target.value });
  };

  handleChangeNewPseudo = (e) => {
    this.setState({ new__pseudo: e.target.value });
  };

  closeClick = (elt) => {
    if (elt === 'pseudo') this.setState({ pseudoFormVisible: false });
    else if (elt === 'name') this.setState({ nameFormVisible: false });
    else if (elt === 'firstname')
      this.setState({ firstnameFormVisible: false });
    else if (elt === 'mail') this.setState({ mailFormVisible: false });
  };

  render() {
    const {
      alertVisible,
      pseudoFormVisible,
      nameFormVisible,
      firstnameFormVisible,
      mailFormVisible,
      new__pseudo,
      new__lastname,
      new__firstname,
      new__mail,
    } = this.state;
    return (
      <SessionContextConsumer>
        {({
          user,
          deleteUser,
          changePseudo,
          changeLastName,
          changeFirstName,
          changeMail,
        }) => {
          if (!user) return null;
          return (
            <div>
              <div className='profil'>
                <div className='profil__left'>
                  <div className='profil__first'>
                    <div className='profil__title title'>
                      <div className='profil__title title--name'>
                        <Dot />
                        <h1>Mon profil</h1>
                      </div>
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
                        <div className='profil__pseudo'>
                          <p>Pseudo</p>
                          <p>{user.pseudo}</p>
                          {!pseudoFormVisible && (
                            <Edit
                              className='edit'
                              onClick={(e) => this.handelClick('pseudo')}
                            />
                          )}
                          {pseudoFormVisible && (
                            <form className='change-form'>
                              <input
                                type='text'
                                onChange={this.handleChangeNewPseudo}
                              ></input>
                              <p
                                className='valid'
                                onClick={() => changePseudo(new__pseudo)}
                              >
                                valider
                              </p>
                              <p
                                className='cancel'
                                onClick={() => this.closeClick('pseudo')}
                              >
                                annuler
                              </p>
                            </form>
                          )}
                        </div>
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
                        <h1>Coordonées</h1>
                      </div>
                    </div>
                    <div className='second__information'>
                      <div class='name'>
                        <p>Nom</p>
                        <p>{user.lastName}</p>
                        {!nameFormVisible && (
                          <Edit
                            className='edit'
                            onClick={(e) => this.handelClick('name')}
                          />
                        )}
                        {nameFormVisible && (
                          <form className='change-form'>
                            <input
                              type='text'
                              onChange={this.handleChangeNewLastname}
                            ></input>
                            <p
                              className='valid'
                              onClick={() => changeLastName(new__lastname)}
                            >
                              valider
                            </p>
                            <p
                              className='cancel'
                              onClick={() => this.closeClick('name')}
                            >
                              annuler
                            </p>
                          </form>
                        )}
                      </div>
                      <div class='first-name'>
                        <p>Prénom</p>
                        <p>{user.name}</p>
                        {!firstnameFormVisible && (
                          <Edit
                            className='edit'
                            onClick={(e) => this.handelClick('firstname')}
                          />
                        )}
                        {firstnameFormVisible && (
                          <form className='change-form'>
                            <input
                              type='text'
                              onChange={this.handleChangeNewFirstname}
                            ></input>
                            <p
                              className='valid'
                              onClick={() => changeFirstName(new__firstname)}
                            >
                              valider
                            </p>
                            <p
                              className='cancel'
                              onClick={() => this.closeClick('firstname')}
                            >
                              annuler
                            </p>
                          </form>
                        )}
                      </div>
                      <div class='mail'>
                        <p>Email</p>
                        <p>{user.mail}</p>
                        {!mailFormVisible && (
                          <Edit
                            className='edit'
                            onClick={(e) => this.handelClick('mail')}
                          />
                        )}
                        {mailFormVisible && (
                          <form className='change-form'>
                            <input
                              type='text'
                              onChange={this.handleChangeNewMail}
                            ></input>
                            <p
                              className='valid'
                              onClick={() => changeMail(new__mail)}
                            >
                              valider
                            </p>
                            <p
                              className='cancel'
                              onClick={() => this.closeClick('mail')}
                            >
                              annuler
                            </p>
                          </form>
                        )}
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
                      <div className='settings__button'>Changer de forfait</div>
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
                      <div className='settings__button'>Modifier ma carte</div>
                    </div>
                    <div className='third__info'>
                      <p>Prochaine facturation : 26 avril 2020</p>
                    </div>
                  </div>

                  <div className='fourth'>
                    <div className='fourth__title title'>
                      <div className='title--name'>
                        <Dot />
                        <h1>Paramètres</h1>
                      </div>
                    </div>
                    <div className='fourth__links'>
                      <div className='settings__button mar'>
                        Gérer les appareils autorisés pour le téléchargement
                      </div>
                      <div className='settings__button mar '>
                        Activer un appareil
                      </div>
                      <div className='settings__button mar'>
                        Se déconnecter de tous les appareils
                      </div>
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
          );
        }}
      </SessionContextConsumer>
    );
  }
}
