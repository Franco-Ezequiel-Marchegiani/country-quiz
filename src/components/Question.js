import React, { useState } from 'react';
import LogoWorld from '../images/logoWorld.svg'
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
function Question() {

  let [numberQuestion, setNumberQuestion] = useState(0)
  let [answerSelected, setAnswerSelected] = useState("");

  let flagQuestions = [
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      flagCode: "arg",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?2",
      flagCode: "br",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?3",
      flagCode: "lux",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín4",
      flagCode: "prt",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      flagCode: "usa",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      flagCode: "nzl",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      flagCode: "nor",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      flagCode: "mex",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      flagCode: "mhl",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
      ]
    },
    {
      questionText: "De qué color es el caballo blanco de San Martín?",
      flagCode: "maf",
      answerOptiones: [
        { answerText: "Azul", isCorrect: false},
        { answerText: "Verde", isCorrect: false},
        { answerText: "Blanco", isCorrect: true},
        { answerText: "Violeta", isCorrect: false},
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
  console.log(flagCode);
  
  return (
      <section className='questionContainer'>
        <img className='logoWorld' src={LogoWorld} alt="" />
        <img className='imageFlag' src={urlImage} alt="" />
        <h2 className='questionText'>{flagQuestions[numberQuestion].questionText}</h2>
          <div className='btnContainer'>
                <button className='btnAnswer hoverSelect' onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>A</span> <span className='textAnswer'>Texto 1</span></button>
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
                <button className='btnAnswer wrongAnswer' onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>B</span> <span className='textAnswer'>Texto 2</span></button>
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
                <button className='btnAnswer correctAnswer' onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>C</span> <span className='textAnswer'>Texto 3</span></button>
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
                <button className='btnAnswer' onClick={() => setAnswerSelected("NextQuestion")}><span className='letterOfOptionAnswer'>D</span> <span className='textAnswer'>Texto 4</span></button>
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