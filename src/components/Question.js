import React, { useRef, useState } from 'react';
import LogoWorld from '../images/logoWorld.svg';
import LogoEnd from '../images/iconWin.svg';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Button } from 'react-bootstrap';
import ResultView from './ResultView';
function Question() {

  let [numberQuestion, setNumberQuestion] = useState(0)
  let [answerSelected, setAnswerSelected] = useState("");
  let [onHoverBtn1, setOnHoverBtn1] = useState(false);
  let [onHoverBtn2, setOnHoverBtn2] = useState(false);
  let [onHoverBtn3, setOnHoverBtn3] = useState(false);
  let [onHoverBtn4, setOnHoverBtn4] = useState(false);
  let [contadorPuntaje, setContadorPuntaje] = useState(0);
  let [wrongAnswerSelected, setWrongAnswerSelected ] = useState(false);
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
        { answerText: "Serbia", answerTextEnglish: "Serbia", isCorrect: false},
        { answerText: "Portugal", answerTextEnglish: "Portugal", isCorrect: true},
        { answerText: "Romania", answerTextEnglish: "Romania", isCorrect: false},
        { answerText: "Singapur", answerTextEnglish: "Singapore", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "usa",
      answerOptiones: [
        { answerText: "Los Estados Unidos de América", answerTextEnglish: "The United States Of America", isCorrect: true},
        { answerText: "Uruguay", answerTextEnglish: "Uruguay", isCorrect: false},
        { answerText: "South Africa", answerTextEnglish: "South Africa", isCorrect: false},
        { answerText: "Puerto Rico", answerTextEnglish: "Puerto Rico", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "nzl",
      answerOptiones: [
        { answerText: "Panama", answerTextEnglish: "Panama", isCorrect: false},
        { answerText: "Nepal", answerTextEnglish: "Nepal", isCorrect: false},
        { answerText: "Nueva Zelanda", answerTextEnglish: "New Zealand", isCorrect: true},
        { answerText: "Puerto Rico", answerTextEnglish: "Puerto Rico", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "nor",
      answerOptiones: [
        { answerText: "Noruega", answerTextEnglish: "Norway", isCorrect: true},
        { answerText: "Irlanda del Norte", answerTextEnglish: "Northern Ireland", isCorrect: false},
        { answerText: "Nigeria", answerTextEnglish: "Nigeria", isCorrect: false},
        { answerText: "Nicaragua", answerTextEnglish: "Nicaragua", isCorrect: false},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "mex",
      answerOptiones: [
        { answerText: "Italia", answerTextEnglish: "Italy", isCorrect: false},
        { answerText: "Iran", answerTextEnglish: "Iran", isCorrect: false},
        { answerText: "Libia", answerTextEnglish: "Libya", isCorrect: false},
        { answerText: "Mexico", answerTextEnglish: "Mexico", isCorrect: true},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "mhl",
      answerOptiones: [
        { answerText: "Republic Of North Macedonia", answerTextEnglish: "Republic Of North Macedonia", isCorrect: false},
        { answerText: "Montenegro", answerTextEnglish: "Montenegro", isCorrect: false},
        { answerText: "Madagascar", answerTextEnglish: "Madagascar", isCorrect: false},
        { answerText: "Las islas marshall", answerTextEnglish: "The Marshall Islands", isCorrect: true},
      ]
    },
    {
      questionText: "A qué país le pertenece esta bandera?",
      questionTextEnglish: "Which country does this flag belong to",
      flagCode: "maf",
      answerOptiones: [
        { answerText: "Francia", answerTextEnglish: "France", isCorrect: true},
        { answerText: "Paraguay", answerTextEnglish: "Paraguay", isCorrect: false},
        { answerText: "San Martín", answerTextEnglish: "Sint Maarten", isCorrect: false},
        { answerText: "Los Territorios Australes Franceses", answerTextEnglish: "The French Southern Territories", isCorrect: false},
      ]
    },
    {}
  ]
  
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

  /* Estas funciones se aplican al clickear cada botón & ejecutan la suma del puntaje & que se muestren las respuestas luego de haber clickeado */
  let onClickBtn1 = () =>{
    if(flagQuestions[numberQuestion].answerOptiones[0].isCorrect === true){
      setContadorPuntaje(contadorPuntaje + 1)
      setWrongAnswerSelected(false)
    }else{
      setWrongAnswerSelected(true)
    }
    setAnswerSelected("NextQuestion")
  }
  let onClickBtn2 = () =>{
    if(flagQuestions[numberQuestion].answerOptiones[1].isCorrect === true){
      setContadorPuntaje(contadorPuntaje + 1)
      setWrongAnswerSelected(false)
    }else{
      setWrongAnswerSelected(true)
    }
    setAnswerSelected("NextQuestion")
  }
  let onClickBtn3 = () =>{
    if(flagQuestions[numberQuestion].answerOptiones[2].isCorrect === true){
      setContadorPuntaje(contadorPuntaje + 1)
      setWrongAnswerSelected(false)
    }else{
      setWrongAnswerSelected(true)
    }
    setAnswerSelected("NextQuestion")
  }
  let onClickBtn4 = () =>{
    if(flagQuestions[numberQuestion].answerOptiones[3].isCorrect === true){
      setContadorPuntaje(contadorPuntaje + 1)
      setWrongAnswerSelected(false)
    }else{
      setWrongAnswerSelected(true)
    }
    setAnswerSelected("NextQuestion")
  }
  let nextBtnOnClick = () =>{
      setAnswerSelected("")
      setNumberQuestion(numberQuestion + 1)  
      setOnHoverBtn1(false)
      setOnHoverBtn2(false)
      setOnHoverBtn3(false)
      setOnHoverBtn4(false)
      if(wrongAnswerSelected === true){
        setNumberQuestion(10)
      }
  }
  let restartBtnFunction = () =>{
    setNumberQuestion(0)
    setContadorPuntaje(0)
  }
  let flagCode = flagQuestions[numberQuestion].flagCode;
  let urlImage = `https://countryflagsapi.com/png/${flagCode}`;
  /* COSAS PENDIENTES POR HACER:
  -El proyecto ya está hecho, queda dividirlo en pequeños componentes, para que no sea mucho código, y plasmar otra vista para las country
  -Hacer una vista del home con dos botones que dirigan a un componente a otro
  -Dividir por componentes, es muy importante, la vista de resultado puede estar tranquilamente en un componente nuevo y ser reutilizable,
  y a su vez, llevar toda su lógica en ese componente
  -Corregir Bug que hace que se vean así los textos*/
  let arrayBtn = [
    {
      id:1,
      btnNumber: 0,
      setOnHoverBtn: setOnHoverBtn1,
      onClickBtn: onClickBtn1,
      className: bothClassesBtn1,
      classNameIcon: "classNameIcon1",
    },
    {
      id:2,
      btnNumber: 1,
      setOnHoverBtn: setOnHoverBtn2,
      onClickBtn: onClickBtn2,
      className: bothClassesBtn2,
      classNameIcon: "classNameIcon2",
    },
    {
      id:3,
      btnNumber: 2,
      setOnHoverBtn: setOnHoverBtn3,
      onClickBtn: onClickBtn3,
      className: bothClassesBtn3,
      classNameIcon: "classNameIcon3",
    },
    {
      id:4,
      btnNumber: 3,
      setOnHoverBtn: setOnHoverBtn4,
      onClickBtn: onClickBtn4,
      className: bothClassesBtn4,
      classNameIcon: "classNameIcon4",
    },
  ]

  return (
      <section className='questionContainer'>
            {numberQuestion < 10 ?
                  <main>
                      <img className='logoWorld' src={LogoWorld} alt="" />
                      <img className='imageFlag' src={urlImage} alt="" />
                      <h2 className='questionText'>{flagQuestions[numberQuestion].questionText}</h2>
                      <div className='btnContainer'>
                        {arrayBtn.map((singleBtn) =>{
                          return <div className='btnAndIconContainer'> 
                                    <button disabled={answerSelected !== ""} className={singleBtn.className} onMouseOver={()=> singleBtn.setOnHoverBtn(true)} onMouseOut={()=> singleBtn.setOnHoverBtn(false)} onClick={singleBtn.onClickBtn}><span className='letterOfOptionAnswer'>A</span> <span className='textAnswer'>{flagQuestions[numberQuestion].answerOptiones[singleBtn.btnNumber].answerText}</span></button>
                                      {
                                        answerSelected !== "" ?
                                        flagQuestions[numberQuestion].answerOptiones[singleBtn.btnNumber].isCorrect === false ?
                                        <FontAwesomeIcon className='wrongIcon' icon={solid('circle-xmark')} /> 
                                        : flagQuestions[numberQuestion].answerOptiones[singleBtn.btnNumber].isCorrect === true ? 
                                        <FontAwesomeIcon className='correctIcon' icon={solid('circle-check')} /> 
                                        : ""
                                        : "" 
                                      }
                                  </div>
                        })}
                      </div>
                      
                      <div className='btnNextContainer'>
                        <button className={answerSelected === "" ? "btnNextHide" : "btnNext"} onClick={nextBtnOnClick}>
                                Next
                        </button>
                      </div>
                </main> 
                : 
                <ResultView contadorPuntaje={contadorPuntaje} setNumberQuestion={setNumberQuestion} setContadorPuntaje={setContadorPuntaje}/>
            }
      </section>
  );
}

export default Question;