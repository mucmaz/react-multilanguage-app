import { UPDATE_LANGUAGE } from "../types/languageTypes";

export function updateLanguage(language){

    return{
        type:UPDATE_LANGUAGE,
        payload:language
    }
    
}