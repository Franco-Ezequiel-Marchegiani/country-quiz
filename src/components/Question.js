import React, { useState } from 'react';
import LogoWorld from '../images/logoWorld.svg';
import './Question.css';
import ResultView from './ResultView';
import ButtonComponent from './ButtonComponent';
import flagQuestions from './ArrayQuestionsFlags'
function Question() {
  
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
  let btnClassNumber2Btn1 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[0].isCorrect === false ? "btnAnswer wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[0].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn1 = btnClassNumber1Btn1 + " " + btnClassNumber2Btn1 +" "


  let btnClassNumber1Btn2 = !onHoverBtn2 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn2 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[1].isCorrect === false ? "btnAnswer wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[1].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn2 = btnClassNumber1Btn2 + " " + btnClassNumber2Btn2


  let btnClassNumber1Btn3 = !onHoverBtn3 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn3 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[2].isCorrect === false ? "wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[2].isCorrect === true ? "correctAnswer" : "" : ""
  let bothClassesBtn3 = btnClassNumber1Btn3 + " " + btnClassNumber2Btn3
  

  let btnClassNumber1Btn4 = !onHoverBtn4 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn4 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[3].isCorrect === false ? "btnAnswer wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[3].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn4 = btnClassNumber1Btn4 + " " + btnClassNumber2Btn4

  let flagCode = flagQuestions[numberQuestion].flagCode;
  let urlImage = `https://countryflagsapi.com/png/${flagCode}`;

  return (
      <section className='questionContainer'>
            {numberQuestion < 10 ?
                  <main>
                      <img className='logoWorld' src={LogoWorld} alt="" />
                      <img className='imageFlag' src={urlImage} alt="" />
                      <h2 className='questionText'>{flagQuestions[numberQuestion].questionText}</h2>
                        <ButtonComponent contadorPuntaje={contadorPuntaje} flagQuestions={flagQuestions} numberQuestion={numberQuestion}setNumberQuestion={setNumberQuestion} setContadorPuntaje={setContadorPuntaje} bothClassesBtn1={bothClassesBtn1} bothClassesBtn2={bothClassesBtn2} bothClassesBtn3={bothClassesBtn3} bothClassesBtn4={bothClassesBtn4} answerSelected={answerSelected} setAnswerSelected={setAnswerSelected} wrongAnswerSelected={wrongAnswerSelected} setWrongAnswerSelected={setWrongAnswerSelected} />
                </main> 
                : 
                <ResultView contadorPuntaje={contadorPuntaje} setNumberQuestion={setNumberQuestion} setContadorPuntaje={setContadorPuntaje}/>
            }
      </section>
  );
}

export default Question;