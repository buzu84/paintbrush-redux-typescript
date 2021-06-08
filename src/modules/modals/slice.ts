import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ModalState = {
  isShown: boolean
  modalName: string | null
}

const initialState: ModalState = {
  isShown: true,
  modalName: null
};

// - show - this slice has a string payload that holds the name of the window we want to show.
// - hide - this action signals that we want to hide all the windows

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.isShown = true
      state.modalName = action.payload
    },
    hide: (state) => {
      state.isShown = true
      state.modalName = null
    }
  },
})
export const modalVisible = slice.reducer
export const { show, hide } = slice.actions