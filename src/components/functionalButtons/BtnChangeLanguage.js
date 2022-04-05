import '../Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Spanish from '../../images/spanishFlag.png';
import English from '../../images/englishFlag.png';
import { useState } from 'react';
import useLanguage from '../../hooks/UseLanguage'
/* Queda pasar todo lo que requiere para su funcionamiento */
function BtnChangeLanguage() {
  let language = true
  return (
    <button className='btnChangeLanguage' onClick={()=> console.log("Hola") }>
        <img className='imageFlagLanguage' src={language === true ? Spanish : English} alt="Change Language" />
        
        </button>
  );
}

export default BtnChangeLanguage;