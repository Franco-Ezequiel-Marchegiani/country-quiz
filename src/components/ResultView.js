import './Question.css';
import LogoEnd from '../images/iconWin.svg';
import { Link } from 'react-router-dom';
/* Queda pasar todo lo que requiere para su funcionamiento */
function ResultView({contadorPuntaje, setNumberQuestion, setContadorPuntaje}) {
  let restartBtnFunction = () =>{
    setNumberQuestion(0)
    setContadorPuntaje(0)
  }
  return (
    <main className='resultContainer'>
        <img className='imageResult' src={LogoEnd} alt="" />
        <div>
            <h1 className='titleResult'>Resultado</h1>
            <p className='textResult'>Respondiste <span>{contadorPuntaje}</span> respuestas correctamente</p>
            {contadorPuntaje === 10 ? <p className='paragraphPerfectScore'>puntaje perfecto :)</p> : "" }
        </div>
        <div className='btnTryAgainContainer'>

        <button className='btnTryAgain' onClick={restartBtnFunction}>Intentar nuevamente</button>
        <Link to="/"> <button className='btnTryAgain btnGoBackHome' onClick={restartBtnFunction}>Regresar al inicio</button></Link>
        </div>
    </main> 
  );
}

export default ResultView;