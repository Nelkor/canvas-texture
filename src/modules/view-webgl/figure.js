const rawPoints = [
  // X Y S T
  -1, 1, 0, 0, // TOP LEFT
  -1, -1, 0, 1, // BOTTOM LEFT
  1, 1, 1, 0, // TOP RIGHT

  1, 1, 1, 0, // TOP RIGHT
  1, -1, 1, 1, // BOTTOM RIGHT
  -1, -1, 0, 1, // BOTTOM LEFT
]

export const points = new Float32Array(rawPoints)
