import { createReducer, on } from "@ngrx/store"
import { decreaseCounter, increseCounter } from "./counter.action"

const intialState = 0

export const counterReducer = createReducer(intialState,
    on(increseCounter,(state)=>state+1),
    on(decreaseCounter,(state)=>state-1)
)