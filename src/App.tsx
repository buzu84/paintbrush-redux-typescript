import React, { useRef } from 'react'
import { useSelector } from "react-redux"
import { currentStrokeSelector } from './selectors'

// pass null as the default value to the useRef hook, otherwise-type error stating that the ref prop of the canvas element does not accept undefined
export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const currentStroke = useSelector(currentStrokeSelector)

  const startDrawing = () => { }
  const endDrawing = () => { }
  const draw = () => { }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
      onMouseMove={draw}
    />
  )
}