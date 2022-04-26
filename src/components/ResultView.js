import './Question.css';
import LogoEnd from '../images/iconWin.svg';
import { Link } from 'react-router-dom';
/* Queda pasar todo lo que requiere para su funcionamiento */
function ResultView({contadorPuntaje, setNumberQuestion, setContadorPuntaje, language, setLanguage}) {
  let restartBtnFunction = () =>{
    setNumberQuestion(0)
    setContadorPuntaje(0)
  }
  let titleSpanish = "Resultado";
  let titleEnglish = "Result";
  let tryAgainSpanish = "Intentar nuevamente";
  let tryAgainEnglish = "Try Again";
  let backHomeSpanish = "Regresar al inicio";
  let backHomeEnglish = "Go back home";
  let perfectScoreSpanish = "Puntaje perfecto :)";
  let perfectScoreEnglish = "Perfect score :)";
  return (
    <main className='resultContainer'>
        <img className='imageResult' src={LogoEnd} alt="" />
          <div>
              <h1 className='titleResult'>{language === true ? titleSpanish : titleEnglish} </h1>
              {language === true ?
              <p className='textResult'>Respondiste  <span>{contadorPuntaje}</span> respuestas correctamente</p> 
              : 
              <p className='textResult'>You answered  <span>{contadorPuntaje}</span> answers correctly</p> }

              {contadorPuntaje === 10 ? <p className='paragraphPerfectScore'>{language === true ? perfectScoreSpanish : perfectScoreEnglish}</p> : "" }
          </div>
          <div className='btnTryAgainContainer'>
              <button className='btnTryAgain' onClick={restartBtnFunction}>{language === true ? tryAgainSpanish : tryAgainEnglish}</button>
              <Link to="/" className='btnGoBackHome'> <button className='btnTryAgain' onClick={restartBtnFunction}>{language === true ? backHomeSpanish : backHomeEnglish}</button></Link>
          </div>
    </main> 
  );
}
export default ResultView;