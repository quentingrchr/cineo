import React from "react";

export default function Profil() {
  return (
    <div>
      <div className="profil">
        <div className="profil__left">
          <div className="profil__first">
            <div className="profil__title">
              <object data="bluedot.svg" type="image/svg+xml"></object>
              <h1>Mon profil</h1>
              <object data="edit.svg" type="image/svg+xml"></object>
            </div>
            <div className="profil__information">
              <div className="profil__information--left">
                <img src="profilpic.png" alt="photo de profile" />
              </div>
              <div className="profil__information--right">
                <p>Dadou du 77</p>
                <p>Abonné depuis le 28/10/2016</p>
                <div className="profil__stat">
                  <a href="#">Voir mes stats</a>
                  <object data="arrowstat.svg" type="image/svg+xml"></object>
                </div>
              </div>
            </div>
          </div>

          <div className="profil__second">
            <div className="profil__title">
              <object data="bluedot.svg" type="image/svg+xml"></object>
              <h1>Coordonees</h1>
              <object data="edit.svg" type="image/svg+xml"></object>
            </div>
          </div>
        </div>
        // LATER
        <div className="profil__right">
          <div className="profil__third">
            <div className="profil__title">
              <object data="bluedot.svg" type="image/svg+xml"></object>
              <h1>Abonnement & Facturation</h1>
              <object data="edit.svg" type=""></object>
            </div>
          </div>
          <div className="profil__fourth">
            <div className="profil__title">
              <object data="bluedot.svg" type="image/svg+xml"></object>
              <h1>Parametres</h1>
              <object data="edit.svg" type=""></object>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
