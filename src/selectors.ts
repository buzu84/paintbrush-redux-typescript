import { RootState } from "./types";

//returns an array of points of the current stroke.
export const currentStrokeSelector = (state: RootState) => state.currentStroke