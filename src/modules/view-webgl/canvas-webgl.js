const canvas = document.querySelector('#field-webgl')

export const sideSize = 512
export const gl = canvas.getContext('webgl')

canvas.width = sideSize
canvas.height = sideSize

gl.clearColor(0, 0, 0, 0)
gl.viewport(0, 0, sideSize, sideSize)
