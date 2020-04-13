import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderPres() {
  return (
    <div className='headerpres__container'>
      <div className='headerpres'>
        <div className='cta__subscribe cta'>
          <p>Souscrire à une offre</p>
        </div>
        <div className='cta__connection cta'>
          <p>Connexion</p>
        </div>
      </div>
      <div className='headerpres__background'></div>
    </div>
  );
}