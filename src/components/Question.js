import React, { useState, useEffect } from 'react';
import LogoWorld from '../images/logoWorld.svg'
import './Question.css';
function Question() {

  let [numberQuestion, setNumberQuestion] = useState(2)
  let [flagImage, setFlagImage] = useState();
  var myHeaders = new Headers();
    myHeaders.append("apikey", "Q1dDLxCfahEE8WEQFGghtx7OQtTEWmUo");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    useEffect(()=>{
      fetch(`https://countryflagsapi.com/png/arg`, requestOptions)
      .then(response => response.text())
      .then(result => setFlagImage(result))
      .catch(error => console.log('error', error));
    }, [numberQuestion])
    
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
  let countriesQuestions = [
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
  ]
  let flagCode = flagQuestions[numberQuestion].flagCode;
  let urlImage = `https://countryflagsapi.com/png/${flagCode}`;
  console.log(flagCode);
  
  return (
      <section className='questionContainer'>
        <img className='logoWorld' src={LogoWorld} alt="" />
        <img className='imageFlag' src={urlImage} alt="" />
        <h2 className='questionText'>{flagQuestions[numberQuestion].questionText}</h2>
        <button className='btnAnswer hoverSelect'><span className='letterOfOptionAnswer'>A</span> <span className='textAnswer'>Texto 1</span></button>
        <button className='btnAnswer '><span className='letterOfOptionAnswer'>B</span> <span className='textAnswer'>Texto 2</span></button>
        <button className='btnAnswer '><span className='letterOfOptionAnswer'>C</span> <span className='textAnswer'>Texto 3</span></button>
        <button className='btnAnswer '><span className='letterOfOptionAnswer'>D</span> <span className='textAnswer'>Texto 4</span></button>
        {/* Si el usuario falla */}
        {/* <p>Results</p>
        <span>You got 4 correct answers</span>
        <button>Try again</button> */}
      </section>
  );
}

export default Question;