// - currentStroke - an array of points corresponding to the stroke that is currently being drawn. 
// - strokes - an array of already drawn strokes 

export type RootState = {
  currentStroke: Stroke
  strokes: Stroke[]
}

// Each stroke has a color represented as a hex string and a list of points, where each point is an object that holds the x and y coordinates.
export type Stroke = {
  points: Point[]
  color: string
}

export type Point = {
  x: number
  y: number
}