import React from "react"
import useCanvas from "../CanvasContext"
import { saveAs } from "file-saver"
import { getCanvasImage } from "../canvasUtils"


// When the user clicks the button it will generate the Blob from the canvas and then save it to the disk using the file-saver package.
export const FilePanel = () => {
  const canvasRef = useCanvas()
  const exportToFile = async () => {
    const file = await getCanvasImage(canvasRef.current)
    if (!file) {
      return
    }
    saveAs(file, "drawing.png")
  }
  return (
    <div className="window file">
      <div className="title-bar">
        <div className="title-bar-text">File</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button className="save-button" onClick={exportToFile}>
            Export
  </button>
        </div>
      </div>
    </div>
  )
}