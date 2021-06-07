import {
    updateStroke,
    beginStroke,
    endStroke,
    setStrokeColor,
} from "../../actions"
import { RootState } from "../../utils/types"
import { createReducer } from "@reduxjs/toolkit"
// now you can mutate the state, instead of always returning the new value-Immer internally


const initialState: RootState["currentStroke"] = {
    points: [],
    color: "#000"
}

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(beginStroke, (state, action) => {
        state.points = [action.payload]
    })
    builder.addCase(updateStroke, (state, action) => {
        state.points.push(action.payload)
    })
    builder.addCase(setStrokeColor, (state, action) => {
        state.color = action.payload
    })
    builder.addCase(endStroke, (state, action) => {
        state.points = []
    })
})