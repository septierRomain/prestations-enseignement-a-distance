import React from 'react';
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import Banner from '../App/Banner';
import ModalAssujetti from '../Modal/assujetti';

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de TVA pour les prestations de services d'enseignements à distance</h1>
        <p>Vous diffusez en ligne des cours (peinture, langue, sport, marketing...) que vous animez en direct.
        Ces vidéos ne sont pas préenregistrées.</p>
        <p>Les prestations d'enseignement expressément exonérées (formation continue par exemple) ne sont ici pas concernées.</p>
        
        <p>Si vous dispensez vos cours de manière automatisée via des vidéos préenregistrées (sans que vous n'ayez à intervenir durant la lecture de la vidéo), ce simulateur de TVA ne correspond pas à votre activité. Retrouvez parmi nos simulateurs, celui correspondant à votre activité : <a href="https://simulateur-prestations-services.netlify.app/">C'est par ici !</a></p>
        <p>C’est parti !</p>
      </div>

      <div id="assujetti">
        <h2>Le preneur est il assujetti à la TVA ? <ModalAssujetti /> </h2>
        <div className="select_container">
          <Link to='Assujetti' ><button className='select'>Oui</button></Link>
          <Link to='non_assujetti' ><button className='select'>Non</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Home