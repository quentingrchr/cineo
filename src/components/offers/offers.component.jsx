import React from "react";
import Title from "../../components/title/title.component";
import { ReactComponent as Union } from "../../assets/svg/Union.svg";

export default function Offers() {
  return (
    <div className="offers__section" id="offers">
      <div className="offers__container">
        <div className="offers__textsContent">
          <div className="offers__title">
            <Title content="Nos offres" />
            <p className="offers__undertitle">
              Vous pourrez changer d’offre à tout moment
            </p>
          </div>
          <div className="offers__text">
            <p>Tarif (comprenant 3 semaines gratuites)</p>
          </div>
          <div className="offers__text">
            <p>Écrans accessibles simultanément</p>
          </div>
          <div className="offers__text">
            <p>
              Tous les contenus sont disponibles sur ordinateur, smartphone et
              tablette
            </p>
          </div>
          <div className="offers__text">
            <p>Film et série TV en illimités</p>
          </div>
          <div className="offers__text">
            <p>HD Disponible</p>
          </div>
        </div>
        <div className="offers__offers">
          <div className="offers__cards">
            <div className="offers__titleCards">De base</div>
            <div className="offers__card">
              <div className="offers__cardContent">7,99€</div>
              <div className="offers__cardContent">1</div>
              <div className="offers__cardContent">
                <Union />
              </div>
              <div className="offers__cardContent">
                <Union />
              </div>
              <div className="offers__cardContent"></div>
            </div>
          </div>
          <div className="offers__cards">
            <div className="offers__titleCards">Plus</div>
            <div className="offers__card">
              <div className="offers__cardContent">8,99€</div>
              <div className="offers__cardContent">2</div>
              <div className="offers__cardContent">
                <Union />
              </div>
              <div className="offers__cardContent">
                <Union />
              </div>
              <div className="offers__cardContent">
                <Union />
              </div>
            </div>
          </div>
          <div className="offers__cards">
            <div className="offers__titleCards">Premium</div>
            <div className="offers__card">
              <div className="offers__cardContent">11,99€</div>
              <div className="offers__cardContent">4</div>
              <div className="offers__cardContent">
                <Union />
              </div>
              <div className="offers__cardContent">
                <Union />
              </div>
              <div className="offers__cardContent">
                <Union />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
