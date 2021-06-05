import { Point } from "./types"

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

// - BEGIN_STROKE - dispatch this action when the user presses the mouse button. It will contain the coordinates in the payload.
// - UPDATE_STROKE - this action will be dispatched when the user moves the pressed mouse. It also contains the coordinates.
// - END_STROKE - dispatch this action when the user releases the mouse.

export const BEGIN_STROKE = "BEGIN_STROKE"
export const UPDATE_STROKE = "UPDATE_STROKE"
export const END_STROKE = "END_STROKE"