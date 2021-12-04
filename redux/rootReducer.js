import { combineReducers } from "redux";
import languageReducers from "./reducers/languageReducers";

const rootReducer = combineReducers({
    language:languageReducers
})

export default rootReducer