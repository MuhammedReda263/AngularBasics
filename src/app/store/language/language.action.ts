import { createAction, props } from "@ngrx/store";



export const languageAction = createAction('lanAction',props<{language:string}>())