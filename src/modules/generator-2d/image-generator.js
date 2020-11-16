import { sideSize } from '@view-webgl/canvas-webgl'

import { ctx } from './canvas-2d'

const center = sideSize / 2
const lineWidth = sideSize * .08
const radius = sideSize * .4
const rectSide = sideSize / 6

ctx.lineWidth = lineWidth
ctx.strokeStyle = 'darkorange'
ctx.fillStyle = 'lightgreen'

export const create2dImage = () => {
  ctx.clearRect(0, 0, sideSize, sideSize)

  ctx.beginPath()
  ctx.arc(center, center, radius, 0, Math.PI * 2)
  ctx.stroke()

  const angle = Date.now() / 1000
  const x = center + Math.cos(angle) * radius
  const y = center + Math.sin(angle) * radius

  ctx.beginPath()
  ctx.rect(x - rectSide / 2, y - rectSide / 2, rectSide, rectSide)
  ctx.fill()
}
