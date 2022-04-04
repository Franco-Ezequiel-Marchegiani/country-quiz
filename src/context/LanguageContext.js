import { createContext, useReducer } from "react";
import LanguageReducer from './LanguageReducer';
import UseLanguage from "../hooks/UseLanguage";
const LanguageContext = (props) =>{
    const initialState = {
        language: true
    }
    const [state, dispatch] = useReducer(LanguageReducer, initialState)

    const getLanguage = () => {
        if(initialState.language === true){
            console.log("True");
        }else{
            console.log("false");
        }
    }
    return (
        <UseLanguage.Provider value={
            {
                language: state,
                getLanguage 
            }}>
            {props.children}
        </UseLanguage.Provider>
    )
}

export default LanguageContext;