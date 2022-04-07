import '../App.css';
import QuestionFlag from './QuestionFlag';
import LogoWorld from '../images/logoWorld.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BtnChangeLanguage from './functionalButtons/BtnChangeLanguage';
import useLanguage from '../hooks/UseLanguage'
function Home({language, setLanguage}) {
    /* const language = useLanguage();
    console.log(language); */
  let [onHoverBtnHome1, setOnHoverBtnHome1] = useState(false);
  let [onHoverBtnHome2, setOnHoverBtnHome2] = useState(false);
  let btnClass1 = !onHoverBtnHome1 ? "btnAnswer" : "btnAnswer hoverSelect";
  let btnClass2 = !onHoverBtnHome2 ? "btnAnswer" : "btnAnswer hoverSelect";
  let titleSpanish = "Bienvenido! Cual Quiz deseas realizar?";
  let titleEnglish = "Welcome! Which game mode do you wanna play?";
  return (
    <main className='containerAll'>
      <h1 className='titleApp'>Country Quiz</h1>
      
            <section className='questionContainer homeContainer'>
                      <BtnChangeLanguage language={language}  setLanguage={setLanguage} />
                      <img className='logoWorld' src={LogoWorld} alt="" />
                      <h2 className='welcomeTitle'>{language === true ? titleSpanish : titleEnglish}</h2>
                      <div>
                          <Link to="/countriesQuiz"><button className={btnClass1} onMouseOver={()=> setOnHoverBtnHome1(true)} onMouseOut={()=> setOnHoverBtnHome1(false)}>Quiz de Capitales</button></Link>
                          <Link to="/flagQuiz"><button className={btnClass2} onMouseOver={()=> setOnHoverBtnHome2(true)} onMouseOut={()=> setOnHoverBtnHome2(false)}>Quiz de Banderas</button></Link>
                      </div>

            </section>
      <footer>
        <p>Created by <Link className='footerLink' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank">Franco Ezequiel Marchegiani</Link> - devChallenges.io</p>
      </footer>

    </main>
  );
}

export default Home;
