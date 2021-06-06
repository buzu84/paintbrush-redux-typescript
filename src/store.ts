// import { composeWithDevTools } from "redux-devtools-extension"
// import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"


import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit"
import {reducer as historyIndex} from './modules/historyIndex/reducer'
import {reducer as currentStroke} from './modules/currentStroke/reducer'
import {reducer as strokes} from './modules/strokes/reducer'

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({ reducer: combineReducers({
  historyIndex,
  currentStroke,
  strokes
}), middleware })


// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// )

// store.dispatch({type: "TEST_ACTION"})