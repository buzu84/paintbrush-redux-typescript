import React, { useRef } from 'react';

// pass null as the default value to the useRef hook, otherwise-type error stating that the ref prop of the canvas element does not accept undefined
export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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