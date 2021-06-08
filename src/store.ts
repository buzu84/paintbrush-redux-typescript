import logger from 'redux-logger'
import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action
} from "@reduxjs/toolkit"
import historyIndex from './modules/historyIndex/slice'
import { currentStroke } from './modules/currentStroke/slice'
import strokes from './modules/strokes/slice'
import { modalVisible } from './modules/modals/slice'
import { projectsList } from './modules/projectsList/slice'
import { RootState } from './utils/types'

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    strokes,
    modalVisible,
    projectsList
  },
  middleware
})

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>