import { AppThunk } from "../../store"
import { newProject } from "./api"

// This thunk will make a POST request to backend and send the project name, the list of strokes, and a generated thumbnail for this project.
export const saveProject = (
  projectName: string,
  thumbnail: string
): AppThunk => async (dispatch, getState) => {
  try {
    const response = await newProject(
      projectName,
      getState().strokes,
      thumbnail
    )
    console.log(response)
  } catch (err) {
    console.log(err.message)
  }
}
export {}
