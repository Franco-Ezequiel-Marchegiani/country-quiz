import React, { useContext, useEffect, useState } from 'react';
import './Question.css';
import countriesQuestions from './ArrayQuestionsCountries';
import UseLanguage from '../hooks/UseLanguage';
function QuestionCountry() {
  const { getLanguage } = useContext(UseLanguage)
  
  /* useEffect(()=>{
    getLanguage();
  }, []) */
 /*  let[ language, setLanguage] = useState(true) */
  console.log(getLanguage);
    return (
      <h1>Hi</h1>
    );
  }
  
  export default QuestionCountry;