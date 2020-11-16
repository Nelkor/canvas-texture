import vShaderText from './shaders/vertex.glsl'
import fShaderText from './shaders/fragment.glsl'

import { gl } from './canvas-webgl'

export const program = gl.createProgram()

const compileShader = shader => {
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader))
  }
}

const vShader = gl.createShader(gl.VERTEX_SHADER)
const fShader = gl.createShader(gl.FRAGMENT_SHADER)

gl.shaderSource(vShader, vShaderText)
gl.shaderSource(fShader, fShaderText)

compileShader(vShader)
compileShader(fShader)

gl.attachShader(program, vShader)
gl.attachShader(program, fShader)

gl.linkProgram(program)
gl.validateProgram(program)

if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
  throw new Error(gl.getProgramInfoLog(program))
}
