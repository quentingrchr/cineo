import React from "react";
import { Link } from "react-router-dom";


export default function HeaderPres() {
  return (
    <div className='headerpres__container'>
      <div className='headerpres'>
        <div className='cta__subscribe cta'>
          <a href='#offers'>Souscrire à une offre</a>
        </div>
        <a className='cta__connection cta'>
          <div> <Link to="/sign-in-up">
            Connexion
          </Link> </div>
        </a>
      </div>
      <div className='headerpres__background'></div>
    </div>
  );
}