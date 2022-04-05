import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import QuestionFlag from './components/QuestionFlag';
import Home from './components/Home';
import QuestionCountry from './components/QuestionCountry';
import LanguageContext from './context/LanguageContext';
function App() {
  let[ language, setLanguage] = useState(true)
    console.log(language);
  return (
    <>
    <BrowserRouter>
                  <Routes >
                    <Route path="/" element={<Home language={language} setLanguage={setLanguage}/>} />
                    <Route path="/flagQuiz" element={<QuestionFlag language={language} setLanguage={setLanguage}/>} />
                    <Route path="/countriesQuiz" element={<QuestionCountry language={language} setLanguage={setLanguage}/>} />
                  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
