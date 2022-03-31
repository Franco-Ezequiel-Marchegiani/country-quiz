import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Question from './components/Question';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="/flagQuiz" element={<Question/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
