import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Spanish from '../images/spanishFlag.png';
import English from '../images/englishFlag.png';
import { useState } from 'react';
/* Queda pasar todo lo que requiere para su funcionamiento */
function BtnChangeLanguage() {
    let[ language, setLanguage] = useState(true)
  return (
    <button onClick={()=> setLanguage(!language)}>
        <img src={language === true ? Spanish : English} alt="" />
        
        </button>
  );
}

export default BtnChangeLanguage;