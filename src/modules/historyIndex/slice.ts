import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { endStroke } from "../sharedActions"

// createSlice needs to have the following:
// - name - the name of the slice. It will be used as a prefix for all the generated actions of this slice
// - initialState - the initial state value
// - reducers - reducers that will be used to generate actions
// - extraReducers - reducers that need to react on shared actions

// historyIndex/undo - this action will have a number payload-limit the number of undos to the length of the strokes array.
export const historyIndex = createSlice({
  name: "historyIndex",
  initialState: 0,
  reducers: {
    undo: (state, action: PayloadAction<number>) => {
      return Math.min(state + 1, action.payload)
    },
    redo: (state) => {
      return Math.max(state - 1, 0)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, () => {
      return 0
    })
  }
})

export default historyIndex.reducer
export const { undo, redo } = historyIndex.actions