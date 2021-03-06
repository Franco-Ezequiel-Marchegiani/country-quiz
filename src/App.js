import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionFlag from './components/QuestionFlag';
import Home from './components/Home';
import QuestionCountry from './components/QuestionCountry';
function App() {
  let[ language, setLanguage] = useState(true)
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
