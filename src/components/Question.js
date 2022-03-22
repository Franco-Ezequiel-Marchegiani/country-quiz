import React, { useRef, useState } from 'react';
import LogoWorld from '../images/logoWorld.svg'
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
function Question() {

  let [numberQuestion, setNumberQuestion] = useState(0)
  let [answerSelected, setAnswerSelected] = useState("");
  let [onHoverBtn1, setOnHoverBtn1] = useState(false);
  let [onHoverBtn2, setOnHoverBtn2] = useState(false);
  let [onHoverBtn3, setOnHoverBtn3] = useState(false);
  let [onHoverBtn4, setOnHoverBtn4] = useState(false);
  let flagQuestions = [
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "arg",
      answerOptiones: [
        { answerText: "Nueva Zelanda",answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Brasil", answerTextEnglish: "Brazil", isCorrect: false},
        { answerText: "Argentina", answerTextEnglish: "Argentina", isCorrect: true},
        { answerText: "Polonia",answerTextEnglish: "Polish", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "br",
      answerOptiones: [
        { answerText: "Brasil", answerTextEnglish: "Brazil", isCorrect: true},
        { answerText: "Bélgica", answerTextEnglish: "Belgium", isCorrect: false},
        { answerText: "Bulgaria", answerTextEnglish: "Bulgaria", isCorrect: false},
        { answerText: "Bolivia", answerTextEnglish: "Bolivia", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "lux",
      answerOptiones: [
        { answerText: "Eslovenia", answerTextEnglish: "Slovenia", isCorrect: false},
        { answerText: "Suecia", answerTextEnglish: "Sweden", isCorrect: false},
        { answerText: "Rusia", answerTextEnglish: "Russian", isCorrect: false},
        { answerText: "luxemburgo", answerTextEnglish: "Luxembourg", isCorrect: true},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "prt",
      answerOptiones: [
        { answerText: "Azul", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Portugal", answerTextEnglish: "Portugal", isCorrect: true},
        { answerText: "Blanco", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Violeta", answerTextEnglish: "New Zealand", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "usa",
      answerOptiones: [
        { answerText: "Azul", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Verde", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Blanco", answerTextEnglish: "New Zealand", isCorrect: true},
        { answerText: "Violeta", answerTextEnglish: "New Zealand", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "nzl",
      answerOptiones: [
        { answerText: "Azul", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Verde", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Blanco", answerTextEnglish: "New Zealand", isCorrect: true},
        { answerText: "Violeta", answerTextEnglish: "New Zealand", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "nor",
      answerOptiones: [
        { answerText: "Azul", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Verde", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Blanco", answerTextEnglish: "New Zealand", isCorrect: true},
        { answerText: "Violeta", answerTextEnglish: "New Zealand", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "mex",
      answerOptiones: [
        { answerText: "Azul", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Verde", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Blanco", answerTextEnglish: "New Zealand", isCorrect: true},
        { answerText: "Violeta", answerTextEnglish: "New Zealand", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "mhl",
      answerOptiones: [
        { answerText: "Azul", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Verde", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Blanco", answerTextEnglish: "New Zealand", isCorrect: true},
        { answerText: "Violeta", answerTextEnglish: "New Zealand", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "maf",
      answerOptiones: [
        { answerText: "Azul", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Verde", answerTextEnglish: "New Zealand", isCorrect: false},
        { answerText: "Blanco", answerTextEnglish: "New Zealand", isCorrect: true},
        { answerText: "Violeta", answerTextEnglish: "New Zealand", isCorrect: false},
      ]
    }
  ]
  /* let countriesQuestions = [
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
  ] */
  let flagCode = flagQuestions[numberQuestion].flagCode;
  let urlImage = `https://countryflagsapi.com/png/${flagCode}`;
  
  /* Las variables son para ahorrar código en el return para añadir y quitar las clases para los estilos de hover */

  let btnClassNumber1Btn1 = !onHoverBtn1 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn1 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[0].isCorrect === false ? "btnAnswer wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[0].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn1 = btnClassNumber1Btn1 + " " + btnClassNumber2Btn1


  let btnClassNumber1Btn2 = !onHoverBtn2 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn2 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[1].isCorrect === false ? "btnAnswer wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[1].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn2 = btnClassNumber1Btn2 + " " + btnClassNumber2Btn2


  let btnClassNumber1Btn3 = !onHoverBtn3 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn3 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[2].isCorrect === false ? "wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[2].isCorrect === true ? "correctAnswer" : "" : ""
  let bothClassesBtn3 = btnClassNumber1Btn3 + " " + btnClassNumber2Btn3
  

  let btnClassNumber1Btn4 = !onHoverBtn4 ? "btnAnswer" : "btnAnswer hoverSelect"
  let btnClassNumber2Btn4 = answerSelected !== "" ? flagQuestions[numberQuestion].answerOptiones[3].isCorrect === false ? "btnAnswer wrongAnswer" : flagQuestions[numberQuestion].answerOptiones[3].isCorrect === true ? "btnAnswer correctAnswer" : "" : "btnAnswer"
  let bothClassesBtn4 = btnClassNumber1Btn4 + " " + btnClassNumber2Btn4

  return (
      <section className='questionContainer'>
        <img className='logoWorld' src={LogoWorld} alt="" />
        <img className='imageFlag' src={urlImage} alt="" />
        <h2 className='questionText'>{flagQuestions[numberQuestion].questionText}</h2>
          <div className='btnContainer'>
                <button
                 className={bothClassesBtn1} onMouseOver={()=> setOnHoverBtn1(true)} onMouseOut={()=> setOnHoverBtn1(false)} onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>A</span> <span className='textAnswer'>{flagQuestions[numberQuestion].answerOptiones[0].answerText}</span></button>
                {answerSelected !== "" ?
                flagQuestions[numberQuestion].answerOptiones[0].isCorrect === false ?
                 <FontAwesomeIcon className='wrongIcon' icon={solid('circle-xmark')} /> 
                 : flagQuestions[numberQuestion].answerOptiones[0].isCorrect === true ? 
                 <FontAwesomeIcon className='correctIcon' icon={solid('circle-check')} /> 
                 : ""
                 : ""
                 }
          </div>
          <div className='btnContainer'>
                <button className={bothClassesBtn2} onMouseOver={()=> setOnHoverBtn2(true)} onMouseOut={()=> setOnHoverBtn2(false)} onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>B</span> <span className='textAnswer'>{flagQuestions[numberQuestion].answerOptiones[1].answerText}</span></button>
                {answerSelected !== "" ?
                flagQuestions[numberQuestion].answerOptiones[1].isCorrect === false ?
                 <FontAwesomeIcon className='wrongIcon' icon={solid('circle-xmark')} /> 
                 : flagQuestions[numberQuestion].answerOptiones[1].isCorrect === true ? 
                 <FontAwesomeIcon className='correctIcon' icon={solid('circle-check')} /> 
                 : ""
                 : ""
                 }
          </div>
          <div className='btnContainer'>
                <button className={bothClassesBtn3} onMouseOver={()=> setOnHoverBtn3(true)} onMouseOut={()=> setOnHoverBtn3(false)} onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>C</span> <span className='textAnswer'>{flagQuestions[numberQuestion].answerOptiones[2].answerText}</span></button>
                {answerSelected !== "" ?
                flagQuestions[numberQuestion].answerOptiones[2].isCorrect === false ?
                 <FontAwesomeIcon className='wrongIcon' icon={solid('circle-xmark')} /> 
                 : flagQuestions[numberQuestion].answerOptiones[2].isCorrect === true ? 
                 <FontAwesomeIcon className='correctIcon' icon={solid('circle-check')} /> 
                 : ""
                 : ""
                 }
          </div>
          <div className='btnContainer'>
                <button className={bothClassesBtn4} onMouseOver={()=> setOnHoverBtn4(true)} onMouseOut={()=> setOnHoverBtn4(false)} onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>D</span> <span className='textAnswer'>{flagQuestions[numberQuestion].answerOptiones[3].answerText}</span></button>
                {answerSelected !== "" ?
                flagQuestions[numberQuestion].answerOptiones[3].isCorrect === false ?
                 <FontAwesomeIcon className='wrongIcon' icon={solid('circle-xmark')} /> 
                 : flagQuestions[numberQuestion].answerOptiones[3].isCorrect === true ? 
                 <FontAwesomeIcon className='correctIcon' icon={solid('circle-check')} /> 
                 : ""
                 : ""
                 }
          </div>
          
          <div className='btnNextContainer'>
            <button className={answerSelected === "" ? "btnNextHide" : "btnNext"} onClick={() =>{
                setAnswerSelected("")
                setNumberQuestion(numberQuestion + 1)  
                } }>
                    Next
            </button>
          </div>
        {/* Si el usuario falla */}
        {/* <p>Results</p>
        <span>You got 4 correct answers</span>
        <button>Try again</button> */}
      </section>
  );
}

export default Question;