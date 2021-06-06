import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { beginStroke, endStroke, updateStroke } from './modules/currentStroke/actions'
import { drawStroke, clearCanvas, setCanvasSize } from './canvasUtils'
import { RootState } from './types'
import { ColorPanel } from './ColorPanel'
import { EditPanel } from './EditPanel'
import { historyIndexSelector } from './modules/historyIndex/selectors'
import { currentStrokeSelector } from './modules/currentStroke/selectors'
import { strokesSelector } from './modules/strokes/selectors'

const WIDTH = 1024
const HEIGHT = 768

// pass null as the default value to the useRef hook, otherwise-type error stating that the ref prop of the canvas element does not accept undefined
export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const currentStroke = useSelector<RootState, RootState["currentStroke"]>(
    currentStrokeSelector
  )

  const historyIndex = useSelector<RootState, RootState["historyIndex"]>(
    historyIndexSelector
  )

  const strokes = useSelector<RootState, RootState["strokes"]>(
    strokesSelector
  )

  // if there is at least one point in the current stroke points array-drawing has started
  // converting the current stroke points array length to a boolean
  const isDrawing = !!currentStroke.points.length
  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const { context } = getCanvasWithContext()
    if (!context) {
      return
    }
    requestAnimationFrame(() =>
      drawStroke(context, currentStroke.points, currentStroke.color)
    )
  }, [currentStroke])

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext()
    if (!canvas || !context) {
      return
    }

    setCanvasSize(canvas, WIDTH, HEIGHT)

    context.lineJoin = "round"
    context.lineCap = "round"
    context.lineWidth = 5
    context.strokeStyle = "black"

    clearCanvas(canvas)
  }, [])

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext()
    if (!context || !canvas) {
      return
    }
    requestAnimationFrame(() => {
      clearCanvas(canvas)

      strokes.slice(0, strokes.length - historyIndex).forEach((stroke) => {
        drawStroke(context, stroke.points, stroke.color)
      })
    })
  }, [historyIndex])


  // mouse press event handler-make it dispatch the BEGIN_STROKE action.
  // mouse coordinates from the offsetX and offsetY fields of the nativeEvent and pass them with the action
  const startDrawing = ({
    nativeEvent
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent
    dispatch(beginStroke(offsetX, offsetY))
  }
  // mouse up and mouse out event handler-stop drawing when release the button, mouse leaves the canvas area
  const endDrawing = () => {
    if (isDrawing) {
      dispatch(endStroke(historyIndex, currentStroke))
    }
  }

  // move event in the draw handler. isDrawing flag to check that the mouse is pressed
  // If the mouse is moved while pressed, dispatch the UPDATE_STROKE action with the updated coordinates.
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
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Redux Typescript Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
      />
      <EditPanel />
      <ColorPanel />
    </div>
  )
}