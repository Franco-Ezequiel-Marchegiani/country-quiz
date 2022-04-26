import '../Question.css';
import Spanish from '../../images/spanishFlag.png';
import English from '../../images/englishFlag.png';
function BtnChangeLanguage({language, setLanguage}) {
  return (
        <button className='btnChangeLanguage' onClick={()=> setLanguage(!language) }>
            <img className='imageFlagLanguage' src={language === true ? Spanish : English} alt="Change Language" />
        </button>
  );
}
export default BtnChangeLanguage;