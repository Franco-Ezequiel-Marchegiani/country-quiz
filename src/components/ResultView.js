import './Question.css';

function ResultView() {
  return (
    <main className='resultContainer'>
        <img className='imageResult' src={LogoEnd} alt="" />
        <div>
            <h1 className='titleResult'>Resultado</h1>
            <p className='textResult'>Respondiste <span>{contadorPuntaje}</span> respuestas correctamente</p>
            {contadorPuntaje === 10 ? <p className='paragraphPerfectScore'>puntaje perfecto :)</p> : "" }
        </div>
        <button className='btnTryAgain' onClick={restartBtnFunction}>Intentar nuevamente</button>
    </main> 
  );
}

export default ResultView;