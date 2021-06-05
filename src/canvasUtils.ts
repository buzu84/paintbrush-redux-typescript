import { Point } from "./types"

// it receives the context that it will use for drawing, the list of points for the current stroke and the stroke color
export const drawStroke = (
  context: CanvasRenderingContext2D,
  points: Point[],
  color: string
) => {
  if (!points.length) {
    return
  }
  context.strokeStyle = color
  context.beginPath()
  context.moveTo(points[0].x, points[0].y)
  points.forEach((point) => {
    context.lineTo(point.x, point.y)
    context.stroke()
  })
  context.closePath()
}