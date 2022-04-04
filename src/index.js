import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionFlag from './components/QuestionFlag';
import LanguageContext from './context/LanguageContext';
import QuestionCountry from './components/QuestionCountry';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageContext.Provider>
          <Routes >
            <Route path="/" element={<App />} />
            <Route path="/flagQuiz" element={<QuestionFlag/>} />
            <Route path="/countriesQuiz" element={<QuestionCountry/>} />
          </Routes>
      </LanguageContext.Provider >
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
