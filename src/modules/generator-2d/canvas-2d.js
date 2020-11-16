import { sideSize } from '@view-webgl/canvas-webgl'

export const canvas = document.createElement('canvas')
export const ctx = canvas.getContext('2d')

canvas.width = sideSize
canvas.height = sideSize
