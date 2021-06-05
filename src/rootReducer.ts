import { RootState } from './types'
import {
  Action,
  UPDATE_STROKE,
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR
} from './actions'

const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
  historyIndex: 0
}

// On every BEGIN_STROKE action, set the points to be a new array with the point from the action.payload .
// UPDATE_STROKE action updates the currentStroke field of state by appending a new point from the action.payload to it.
// The END_STROKE action can be dispatched when the mouse leaves the canvas. It may result in calling the END_STROKE part of the reducer to trigger before the currentStroke has any points. To prevent unnecessary calculations, return the unchanged state if the currentStroke.points array is empty. If there are any points, append the current stroke to the list of strokes and reset the currentStroke.points to the empty array.

export const rootReducer = (
  state: RootState = initialState,
  action: Action
) => {
  switch (action.type) {
    case BEGIN_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [action.payload]
        }
      }
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [...state.currentStroke.points, action.payload]
        }
      }
    }
    case END_STROKE: {
      if (!state.currentStroke.points.length) {
        return state
      }
      return {
        ...state,
        currentStroke: { ...state.currentStroke, points: [] },
        strokes: [...state.strokes, state.currentStroke]
      }
    }

    case SET_STROKE_COLOR: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          ...{ color: action.payload }
        }
      }
    }

    default:
      return state
  }
}