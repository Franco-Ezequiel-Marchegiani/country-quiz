import './App.css';
import QuestionFlag from './components/QuestionFlag';
import LogoWorld from './images/logoWorld.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import BtnChangeLanguage from './components/functionalButtons/BtnChangeLanguage';
import Home from './components/Home';
import QuestionCountry from './components/QuestionCountry';

function App() {
  let [onHoverBtnHome1, setOnHoverBtnHome1] = useState(false);
  let [onHoverBtnHome2, setOnHoverBtnHome2] = useState(false);
  let btnClass1 = !onHoverBtnHome1 ? "btnAnswer" : "btnAnswer hoverSelect";
  let btnClass2 = !onHoverBtnHome2 ? "btnAnswer" : "btnAnswer hoverSelect";
  let[ language, setLanguage] = useState(true)
    console.log(language);
  return (
    <>
    <BrowserRouter>
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/flagQuiz" element={<QuestionFlag/>} />
            <Route path="/countriesQuiz" element={<QuestionCountry/>} />
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
