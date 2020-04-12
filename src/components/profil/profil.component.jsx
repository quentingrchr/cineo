import React from "react";
import { ReactComponent as Dot } from "../../assets/svg/bluedot.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as GreyDot } from "../../assets/svg/greydot.svg";
import { ReactComponent as Visa } from "../../assets/svg/visa.svg";

export default function Profil() {
  return (
    <div>
      <div className="profil">
        <div className="profil__left">
          <div className="profil__first">
            <div className="profil__title title">
              <div className="profil__title title--name">
                <Dot />
                <h1>Mon profil</h1>
              </div>
              <Edit className="edit" />
            </div>
            <div className="profil__information">
              <div className="profil__information--left">
                <img
                  className="profil__img"
                  src="https://occ-0-4164-768.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUTMshYC3Z2g_SQr_f7tJHLaQZOkuKg63U8DlRTxu3cb78sui7ZRKVSXppNQzfQIvCmomBCHvEaIXVsyypFNVoHLcC_s.webp?r=534&quot"
                  alt="deux personnes à la plage"
                />
              </div>
              <div className="profil__information--right">
                <p>DADOUDOUDOUDOU</p>
                <p>Abonné depuis le 28/10/2016</p>
                <div className="profil__stat">
                  <a href="#">Voir mes stats</a>
                  <Arrow className="profil__arrow" />
                </div>
              </div>
            </div>
          </div>

          <div className="second">
            <div className="second__title title">
              <div className="second__title title--name">
                <Dot />
                <h1>Coordonees</h1>
              </div>
              <Edit className="edit" />
            </div>
            <div className="second__information">
              <div className="second__info ">
                <p>Nom</p>
                <p>prénom</p>
                <p>Date de naissance</p>
                <p>Email</p>
              </div>
              <div className="second__answer ">
                <p>Dadou</p>
                <p>Réda</p>
                <p>30/06/1999</p>
                <p>red.quen@bast.toto</p>
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
            <div className="third__info">
              <p>Détail du forfait : ULTRA PREMIUM HD</p>
              <a href="#">Changer de forfait</a>
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

              <a href="#">Modifier ma carte</a>
            </div>
            <div className="third__info">
              <p>Prochaine facturation : 26 avril 2020</p>
            </div>
          </div>

          <div className="fourth">
            <div className="fourth__title title">
              <div className="title--name">
                <Dot />
                <h1>Parametres</h1>
              </div>
            </div>
            <div className="fourth__links">
              <a href="#">
                Gérer les appareils autorisés pour le téléchargement
              </a>
              <a href="#">Activer un appareil</a>
              <a href="#">Se déconnecter de tous les appareils</a>
            </div>
            <button className="fourth__button">Résilier l'abonnement</button>
          </div>
        </div>
      </div>
    </div>
  );
}
