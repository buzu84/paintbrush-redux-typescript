import { RootState } from "./utils/types";

//returns an array of points of the current stroke.
export const currentStrokeSelector = (state: RootState) => state.currentStroke