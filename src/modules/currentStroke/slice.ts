import { endStroke } from "../sharedActions"
import { RootState, Point } from "../../utils/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState: RootState["currentStroke"] = {
    points: [],
    color: "#000"
}

// This slice has three reducers that will generate actions:
// - currentStroke/beginStroke - this action will have the payload of type Point
// - currentStroke/updateStroke - will also hold a Point as a payload
// - currentStroke/updateColor - there pass a string representing the stroke color in its payload.
const slice = createSlice({
    name: "currentStroke",
    initialState,
    reducers: {
        beginStroke: (state, action: PayloadAction<Point>) => {
            state.points = [action.payload]
        },
        updateStroke: (state, action: PayloadAction<Point>) => {
            state.points.push(action.payload)
        },
        setStrokeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(endStroke, (state) => {
            state.points = []
        })
    }
})

export const currentStroke = slice.reducer;
export const { beginStroke, updateStroke, setStrokeColor } = slice.actions;