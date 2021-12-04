import { UPDATE_LANGUAGE } from "../types/languageTypes"
import { language } from "../initialValues/defaultLanguage";

const initialState = {language}

export default function languageReducers(state = initialState, { type, payload } ){

    switch(type){

        case UPDATE_LANGUAGE:
            if(!localStorage.getItem("language")){
                localStorage.setItem("language",language);
                if(typeof window !== "undefined"){window.location.reload()}
            }else{
                localStorage.setItem("language",payload);
                if(typeof window !== "undefined"){window.location.reload()}
            }
            return{
                ...state,
                language:payload
            }
        
        default:
            return state

    }

}