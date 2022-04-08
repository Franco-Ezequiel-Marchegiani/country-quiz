import React, { useContext, useEffect, useState } from 'react';
import './Question.css';
import LogoWorld from '../images/logoWorld.svg';
import countriesQuestions from './arrays/ArrayQuestionsCountries';
import UseLanguage from '../hooks/UseLanguage';
import BtnChangeLanguage from './functionalButtons/BtnChangeLanguage';
import ResultView from './ResultView';
function QuestionCountry({language, setLanguage}) {
  
  let [numberQuestion, setNumberQuestion] = useState(0)
  let [answerSelected, setAnswerSelected] = useState("");
  let [onHoverBtn1, setOnHoverBtn1] = useState(false);
  let [onHoverBtn2, setOnHoverBtn2] = useState(false);
  let [onHoverBtn3, setOnHoverBtn3] = useState(false);
  let [onHoverBtn4, setOnHoverBtn4] = useState(false);
  let [contadorPuntaje, setContadorPuntaje] = useState(0);
  let [wrongAnswerSelected, setWrongAnswerSelected ] = useState(false);

  /* Las variables son para ahorrar código en el return para añadir y quitar las clases para los estilos de hover */
  let btnClassNumber1Btn1 = !onHoverBtn1 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn1 = answerSelected !== "" ? countriesQuestions[numberQuestion].answerOptiones[0].isCorrect === false ? "btnAnswer wrongAnswer" : countriesQuestions[numberQuestion].answerOptiones[0].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn1 = btnClassNumber1Btn1 + " " + btnClassNumber2Btn1 +" "


  let btnClassNumber1Btn2 = !onHoverBtn2 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn2 = answerSelected !== "" ? countriesQuestions[numberQuestion].answerOptiones[1].isCorrect === false ? "btnAnswer wrongAnswer" : countriesQuestions[numberQuestion].answerOptiones[1].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn2 = btnClassNumber1Btn2 + " " + btnClassNumber2Btn2


  let btnClassNumber1Btn3 = !onHoverBtn3 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn3 = answerSelected !== "" ? countriesQuestions[numberQuestion].answerOptiones[2].isCorrect === false ? "wrongAnswer" : countriesQuestions[numberQuestion].answerOptiones[2].isCorrect === true ? "correctAnswer" : "" : ""
  let bothClassesBtn3 = btnClassNumber1Btn3 + " " + btnClassNumber2Btn3
  

  let btnClassNumber1Btn4 = !onHoverBtn4 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn4 = answerSelected !== "" ? countriesQuestions[numberQuestion].answerOptiones[3].isCorrect === false ? "btnAnswer wrongAnswer" : countriesQuestions[numberQuestion].answerOptiones[3].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn4 = btnClassNumber1Btn4 + " " + btnClassNumber2Btn4

  let flagCode = countriesQuestions[numberQuestion].flagCode;
  let urlImage = `https://countryflagsapi.com/png/${flagCode}`;

  let textSpanishTitle = countriesQuestions[numberQuestion].questionText;
  let textEnglishTitle = countriesQuestions[numberQuestion].questionTextEnglish;
  return (
    <main className='containerAll'>
      <h1 className='titleApp'>Country Quiz</h1>
          <section className='questionContainer'>
            <BtnChangeLanguage language={language} setLanguage={setLanguage} />
            {numberQuestion < 10 ?
                    <main>
                        <img className='logoWorld' src={LogoWorld} alt="" />
                        <img className='imageFlag' src={urlImage} alt="" />
                        <h2 className='questionText'>{language === true ? textSpanishTitle : textEnglishTitle}</h2>
                        {/* Acá se pasa todo lo necesario para utilizar el componente ButtonComponent */}
                          <ButtonComponent contadorPuntaje={contadorPuntaje} flagQuestions={countriesQuestions} numberQuestion={numberQuestion}setNumberQuestion={setNumberQuestion} setContadorPuntaje={setContadorPuntaje} bothClassesBtn1={bothClassesBtn1} bothClassesBtn2={bothClassesBtn2} bothClassesBtn3={bothClassesBtn3} bothClassesBtn4={bothClassesBtn4} answerSelected={answerSelected} setAnswerSelected={setAnswerSelected} wrongAnswerSelected={wrongAnswerSelected} setWrongAnswerSelected={setWrongAnswerSelected} language={language} setLanguage={setLanguage} />
                  </main> 
                  : 
                  <ResultView contadorPuntaje={contadorPuntaje} setNumberQuestion={setNumberQuestion} setContadorPuntaje={setContadorPuntaje} language={language} setLanguage={setLanguage} />
              }
          </section>
      <footer>
        <p>Created by <Link className='footerLink' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank">Franco Ezequiel Marchegiani</Link> - devChallenges.io</p>
      </footer>

    </main>
  );
}
  
  export default QuestionCountry;