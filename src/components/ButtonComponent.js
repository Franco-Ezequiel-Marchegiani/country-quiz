import { useState } from 'react';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
function ButtonComponent({contadorPuntaje, flagQuestions, setContadorPuntaje, numberQuestion, setNumberQuestion,  bothClassesBtn1, bothClassesBtn2, bothClassesBtn3, bothClassesBtn4,answerSelected, setAnswerSelected, wrongAnswerSelected, setWrongAnswerSelected}) {
    /* Estas funciones se aplican al clickear cada botón & ejecutan la suma del puntaje & que se muestren las respuestas luego de haber clickeado */
    let [onHoverBtn1, setOnHoverBtn1] = useState(false);
    let [onHoverBtn2, setOnHoverBtn2] = useState(false);
    let [onHoverBtn3, setOnHoverBtn3] = useState(false);
    let [onHoverBtn4, setOnHoverBtn4] = useState(false);
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
          <div className='btnNextContainer'>
                <button className={answerSelected === "" ? "btnNextHide" : "btnNext"} onClick={nextBtnOnClick}>
                        Next
                </button>
          </div>
        </div>
  );
}

export default ButtonComponent;