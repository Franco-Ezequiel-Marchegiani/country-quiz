import React, { useState } from 'react';
import LogoWorld from '../images/logoWorld.svg'
function Question() {

  let [numberQuestion, setNumberQuestion] = useState(3)
  var myHeaders = new Headers();
    myHeaders.append("apikey", "Q1dDLxCfahEE8WEQFGghtx7OQtTEWmUo");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch("https://countryflagsapi.com/png/brazil", requestOptions)
    .then(response => response.text())
    .then(result => console.log("Hi"))
    .catch(error => console.log('error', error));
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
  let flagCode = flagQuestions[numberQuestion].flagCode
  console.log(flagCode);
  
  return (
      <section>
        <h2>{flagQuestions[numberQuestion].questionText}</h2>
        <img src={LogoWorld} alt="" />
        <button>A Texto 1</button>
        <button>B Texto 2</button>
        <button>C Texto 3</button>
        <button>D Texto 4</button>
        {/* Si el usuario falla */}
        {/* <p>Results</p>
        <span>You got 4 correct answers</span>
        <button>Try again</button> */}
      </section>
  );
}

export default Question;