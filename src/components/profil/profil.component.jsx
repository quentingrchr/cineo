import React from "react";
import { ReactComponent as Dot } from "../../assets/svg/bluedot.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as GreyDot } from "../../assets/svg/greydot.svg";
import { ReactComponent as Visa } from "../../assets/svg/visa.svg";
import { SessionContextConsumer } from "../../context/session.context";
import { Link } from "react-router-dom";

export default class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
      formChangesOpen: false,
      new__pseudo: '',
      new__lastname: '',
      new__firstname: '',
      new__mail: '',
    };
  }

  hideAlert = () => {
    this.setState({ alertVisible: false });
    console.log("click1");
  };

  showAlert = () => {
    this.setState({ alertVisible: true });
    console.log("click");
  };

  handelClick = () => {
    this.state.formChangesOpen
      ? this.setState({ formChangesOpen: false })
      : this.setState({ formChangesOpen: true });
  };

  handleChangeNewMail = (e) => {
    this.setState({ new__mailValue: e.target.value });
  };

  handleChangeNewLastname = (e) => {
    this.setState({ new__lastnameValue: e.target.value });
  };

  handleChangeNewFirstname = (e) => {
    this.setState({ new__firstnameValue: e.target.value });
  };

  handleChangeNewPseudo = (e) => {
    this.setState({ new__pseudoValue: e.target.value });
  };

  render() {
    const { alertVisible, formChangesOpen, new__pseudo, new__lastname, new__firstname, new__mail } = this.state;
    return (
      <SessionContextConsumer>
        {({ user, deleteUser }) => (
          <div>
            { formChangesOpen && (
            <div className='form__changes__container'>
              <form>
                <div className='form__changes'>
                  <div className='close__button' onClick={() => this.handelClick()}>
                  <svg viewBox="0 0 329.26933 329">
                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                  </svg>
                  </div>
                  <div className='form__changes__part'>
                    <p>Pseudo</p>
                    <input type='text' placeholder='Nouveau pseudo' value={this.new__pseudo} onChange={this.handleChangeNewPseudo}></input>
                  </div>
                  <div className='form__changes__part'>
                    <p>Nom</p>
                    <input type='text' placeholder='Nouveau nom' value={this.new__lastname} onChange={this.handleChangeNewLastname}></input>
                  </div>
                  <div className='form__changes__part'>
                    <p>Prénom</p>
                    <input type='text' placeholder='Nouveau prénom' value={this.new__firstname} onChange={this.handleChangeNewFirstname}></input>
                  </div>
                  <div className='form__changes__part'>
                    <p>E-mail</p>
                    <input type='text' placeholder='example@abc.com' value={this.new__mail} onChange={this.handleChangeNewMail}></input>
                  </div>
                  <div>
                    <input className='form__changes__cta'type='submit' value='Valider'></input>
                  </div>
                </div>
              </form>
            </div>)}
            <div className='profil'>
              <div className='profil__left'>
                <div className='profil__first'>
                  <div className='profil__title title'>
                    <div className='profil__title title--name'>
                      <Dot />
                      <h1>Mon profil</h1>
                    </div>
                    <Edit className='edit' onClick={() => this.handelClick()} />
                  </div>
                  <div className="profil__information">
                    <div className="profil__information--left">
                      <img
                        className="profil__img"
                        src="https://occ-0-4164-768.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUTMshYC3Z2g_SQr_f7tJHLaQZOkuKg63U8DlRTxu3cb78sui7ZRKVSXppNQzfQIvCmomBCHvEaIXVsyypFNVoHLcC_s.webp?r=534&quot"
                        alt="deux personnes à la plage"
                      />
                    </div>
                    <div className='profil__information--right'>
                      <div className='profil__pseudo'>
                        <p>Pseudo</p>
                        <p>{user.pseudo}</p>
                      </div>
                      <p>{`Abonné depuis le ${user.signUpDate}`}</p>
                      <div className="profil__stat">
                        <div>Voir mes stats</div>
                        <Arrow className="profil__arrow" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="second">
                  <div className="second__title title">
                    <div className="second__title title--name">
                      <Dot />
                      <h1>Coordonées</h1>
                    </div>
                    <Edit className='edit' onClick={() => this.handelClick()} />
                  </div>
                  <div className="second__information">
                    <div className="second__info ">
                      <p>Nom</p>
                      <p>Prénom</p>
                      <p>Email</p>
                    </div>
                    <div className="second__answer ">
                      <p>{user.lastName}</p>
                      <p>{user.name}</p>
                      <p>{user.mail}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profil__right">
                <div className="third">
                  <div className="third__title title ">
                    <div className="third__title title--name">
                      <Dot />
                      <h1>Abonnement & Facturation</h1>
                    </div>
                  </div>
                  <div className='third__info'>
                    <p>Détail du forfait : ULTRA PREMIUM HD</p>
                    <div  className='settings__button'>Changer de forfait</div>
                  </div>
                  <div className="third__info">
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
                  <div className="third__info">
                    <p>Prochaine facturation : 26 avril 2020</p>
                  </div>
                </div>

                <div className="fourth">
                  <div className="fourth__title title">
                    <div className="title--name">
                      <Dot />
                      <h1>Paramètres</h1>
                    </div>
                  </div>
                  <div className='fourth__links'>
                    <div className='settings__button mar'>
                      Gérer les appareils autorisés pour le téléchargement
                    </div>
                    <div className='settings__button mar '>Activer un appareil</div>
                    <div className='settings__button mar'>Se déconnecter de tous les appareils</div>
                  </div>
                  <button
                    className="fourth__button"
                    onClick={() => this.showAlert()}
                  >
                    Résilier l'abonnement
                  </button>
                </div>
                {alertVisible && (
                  <div className="alert" onClick={() => this.hideAlert()}>
                    <div>
                      <p>
                        Vous êtes sur le point se supprimer votre compte et
                        toutes les données qui y sont enregistrées
                      </p>
                      <Link to="/">
                        <button
                          className="fourth__button"
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
