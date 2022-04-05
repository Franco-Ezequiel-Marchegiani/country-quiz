import { createContext, useReducer } from "react";
/* Acá se crea el estado, y el hook permite que se pueda colocar en diversos archivos */
const LanguageContext = createContext({
    language: false,
    setLanguage: ()=>{ console.log("Prueba")}
})

export default LanguageContext;