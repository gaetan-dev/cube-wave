class Vertex {
  constructor (x, y, z) {
    this.x = +x
    this.y = +y
    this.z = +z
  }

  rotate (x, y, z) {
    this.rotateX(x)
    this.rotateY(y)
    this.rotateZ(z)
  }

  rotateX (angle) {
    const rad = Math.radians(angle)
    const cosa = Math.cos(rad)
    const sina = Math.sin(rad)
    this.y = this.y * cosa - this.z * sina
    this.z = this.y * sina + this.z * cosa
  }

  rotateY (angle) {
    const rad = Math.radians(angle)
    const cosa = Math.cos(rad)
    const sina = Math.sin(rad)
    this.z = this.z * cosa - this.x * sina
    this.x = this.z * sina + this.x * cosa
  }

  rotateZ (angle) {
    const rad = Math.radians(angle)
    const cosa = Math.cos(rad)
    const sina = Math.sin(rad)
    this.x = this.x * cosa - this.y * sina
    this.y = this.x * sina + this.y * cosa
  }
}

class Vertex2D {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

export { Vertex, Vertex2D }
