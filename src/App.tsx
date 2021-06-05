import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { currentStrokeSelector } from './selectors'
import { beginStroke, endStroke, updateStroke } from './actions'

// pass null as the default value to the useRef hook, otherwise-type error stating that the ref prop of the canvas element does not accept undefined
export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const currentStroke = useSelector(currentStrokeSelector)
  // if there is at least one point in the current stroke points array-drawing has started
  // converting the current stroke points array length to a boolean
  const isDrawing = !!currentStroke.points.length

  const dispatch = useDispatch()

  // mouse press event handler-make it dispatch the BEGIN_STROKE action.
  // mouse coordinates from the offsetX and offsetY fields of the nativeEvent and pass them with the action
  const startDrawing = ({
    nativeEvent
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent
    dispatch(beginStroke(offsetX, offsetY))
  }

  const endDrawing = () => { }

  // move event in the draw handler. isDrawing flag to check that the mouse is pressed
  const draw = ({
    nativeEvent
  }: React.MouseEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    dispatch(updateStroke(offsetX, offsetY))
  }

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