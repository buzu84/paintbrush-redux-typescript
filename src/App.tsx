import React, { useRef } from 'react';


export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  return <canvas ref={canvasRef} />
}