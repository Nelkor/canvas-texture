import { canvas } from '@generator-2d/canvas-2d'
import { create2dImage } from '@generator-2d/image-generator'

import { gl } from './canvas-webgl'
import { program } from './webgl-program'
import { points } from './figure'
import { Texture } from './Texture'
import { registerFrame } from './fps-counter'

const fSize = Float32Array.BYTES_PER_ELEMENT

gl.useProgram(program)

const aPos = gl.getAttribLocation(program, 'a_pos')
const aTexPos = gl.getAttribLocation(program, 'a_texPos')
const uSampler = gl.getUniformLocation(program, 'u_sampler')


// TEXTURE
const tex = new Texture(gl)

tex.setSlot(0)
tex.setParamI('TEXTURE_MIN_FILTER', 'LINEAR')


// BUFFER
const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

gl.enableVertexAttribArray(aPos)
gl.enableVertexAttribArray(aTexPos)

gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, fSize * 4, 0)
gl.vertexAttribPointer(aTexPos, 2, gl.FLOAT, false, fSize * 4, fSize * 2)


const draw = () => {
  registerFrame()
  requestAnimationFrame(draw)

  create2dImage()

  tex.setImageRGBA(canvas)
  gl.uniform1i(uSampler, 0)

  // DRAW
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.TRIANGLES, 0, points.length / 2)
}

export const startDrawing = () => draw()
