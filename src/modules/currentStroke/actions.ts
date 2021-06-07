import { Point, Stroke } from "../../utils/types"
import { createAction } from "@reduxjs/toolkit"

// - BEGIN_STROKE - dispatch this action when the user presses the mouse button. It will contain the coordinates in the payload.
// - UPDATE_STROKE - this action will be dispatched when the user moves the pressed mouse. It also contains the coordinates.
// - END_STROKE - dispatch this action when the user releases the mouse.


export const beginStroke = createAction<Point>("BEGIN_STROKE")
export const updateStroke = createAction<Point>("UPDATE_STROKE")
export const setStrokeColor = createAction<string>("SET_STROKE_COLOR")
export const endStroke = createAction<{
    stroke: Stroke
    historyIndex: number
}>("endStroke")





