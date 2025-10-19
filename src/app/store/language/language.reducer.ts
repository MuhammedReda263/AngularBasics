import { createReducer, on } from "@ngrx/store";
import { languageAction } from "./language.action";

const initialValue = localStorage.getItem('lan') ?? "ar";
export const languageReducer = createReducer(
   initialValue,on (languageAction,(state,action)=>action.language)
)