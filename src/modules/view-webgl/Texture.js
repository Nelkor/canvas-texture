export class Texture {
  _setImage(image, format) {
    const size = this.gl.UNSIGNED_BYTE

    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, format, format, size, image)
  }

  constructor(gl) {
    this.gl = gl
    this.texture = gl.createTexture()
  }

  setParamI(name, value) {
    const target = this.gl.TEXTURE_2D
    const pName = this.gl[name]
    const pValue = this.gl[value]

    this.gl.texParameteri(target, pName, pValue)
  }

  setSlot(n) {
    const slot = this.gl['TEXTURE' + n]

    this.gl.activeTexture(slot)
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture)
  }

  setImageRGB(image) {
    this._setImage(image, this.gl.RGB)
  }

  setImageRGBA(image) {
    this._setImage(image, this.gl.RGBA)
  }
}
