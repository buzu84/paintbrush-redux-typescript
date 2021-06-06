import { Point, Stroke } from "../../types"

// - BEGIN_STROKE - dispatch this action when the user presses the mouse button. It will contain the coordinates in the payload.
// - UPDATE_STROKE - this action will be dispatched when the user moves the pressed mouse. It also contains the coordinates.
// - END_STROKE - dispatch this action when the user releases the mouse.


export const BEGIN_STROKE = "BEGIN_STROKE"
export const UPDATE_STROKE = "UPDATE_STROKE"
export const END_STROKE = "END_STROKE"
export const SET_STROKE_COLOR = "SET_STROKE_COLOR"

export type Action =
    | {
        type: typeof BEGIN_STROKE
        payload: Point
    }
    | {
        type: typeof UPDATE_STROKE
        payload: Point
    }
    | {
        type: typeof END_STROKE
    }
    | {
        type: typeof SET_STROKE_COLOR
        payload: string
    }

export const beginStroke = (x: number, y: number) => {
    return { type: BEGIN_STROKE, payload: { x, y } }
}
export const updateStroke = (x: number, y: number) => {
    return { type: UPDATE_STROKE, payload: { x, y } }
}
export const endStroke = (historyLimit: number, stroke: Stroke) => {
    return { type: END_STROKE, payload: { historyLimit, stroke } }
}

export const setStrokeColor = (color: string) => {
    return { type: SET_STROKE_COLOR, payload: color }
}




