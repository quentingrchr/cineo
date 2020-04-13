import React from 'react';
import HeaderPres from '../../components/headerpres/headerpres.component';
import Footer from '../../components/footer/footer.component';
import Photo1 from '../../assets/img/pres_photo1.png';
import Photo2 from '../../assets/img/pres_photo2.png';
import Photo3 from '../../assets/img/pres_photo3.png';
import Photo4 from '../../assets/img/pres_spiderman.png';

export default function PresPage() {
  return (
    <div>
      <HeaderPres />
      <div className='presentation__page__content'>
        <section className='presentation__section'>
          <div className='text__container'>
            <div className='presentation__title'>
              <h1>Ciné</h1>
              <span>o</span>
            </div>
            <h3 className='text__bold'><span className='title__c'>Ciné</span><span className='title__o'>o</span> c’est avant tout du divertissement en continu</h3>
            <h3 className='text__bold'>Plusieurs offres à partir de <span className='text__price'>7,99</span>€/mois</h3>
            <div className='cta__container'>
              <a href='#offers' className='cta__see'>Voir nos offres</a>
            </div>
            <h3 className='text__long'> <span className='title__c'>Ciné</span><span className='title__o'>o</span> réunit des grands succès aux inoubliables classiques de tous les types : 
              séries, émissions et films exclusifs à Cinéo Originals. 
              <br/>Il y en a pour tous les goûts pour que toute la famille puisse en profiter</h3>
          </div>
          <div>
            <img src={Photo1} />
          </div>
        </section>
        <section className='presentation__section'>
          <div className='text__container'>
            <h2>Regardez où et quand vous le voulez</h2>
            <h3 className='text__long'>Profitez de <span className='title__c'>Ciné</span><span className='title__o'>o</span> sur des écrans en simultané, 
            en mobilité sur votre téléphone et tablette ou à la maison sur votre TV; 
              le tout en ultra haute définition sur une sélection de contenus.</h3>
            <div className='cta__container'>
              <a href='#offers' className='cta__see'>Voir nos offres</a>
            </div>
          </div>
          <div>
            <img src={Photo2} />
          </div>
        </section>
        <section className='section__originals'>
          <div className='section__originals__text'>
            <h2>De nouveaux <span className='title__c'>Ciné</span><span className='title__o'>o</span> Originals tous les mois</h2>
            <h3 className='text__long'>Des films, des séries et des documentaires créés par les artistes des studios,
              Pixar, Marvel, Star Wars <br/> et National Geographic.... le tout exclusivement sur <span className='title__c'>Ciné</span><span className='title__o'>o</span>.</h3>
          </div>
          <div className='section__originals__pictures'>
            <div className='originals__pictures'>
              <img src={Photo3}/>
            </div>
            <div className='cta__container'>
              <a href='#offers' className='cta__see'>Voir nos offres</a>
            </div>
          </div>
          
        </section>
        <section className='presentation__section section__reverse'>
          <div className='text__container'>
            <h2>Enregistrez vos films et séries</h2>
            <h3 className='text__long'>Téléchargez ce que vous voulez pour le regarder quand vous le souhaitez, 
              même dans les endroits où il n'y a pas de Wi-Fi.</h3>
            <div className='cta__container'>
              <a href='#offers' className='cta__see'>Voir nos offres</a>
            </div>
          </div>
          <div>
            <img src={Photo4}/>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}