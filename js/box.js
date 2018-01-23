import Cube from './cube'

class Box extends Cube {
  constructor (center, size, height) {
    super(center, size)

    this.height = height

    // Override box height
    this.vertices.forEach((vertex, index) => {
      const h = index === 0 || index === 3 || index === 4 || index === 7
      ? this.position.z + height / 2
      : this.position.z - height / 2

      vertex.z = h
    })
  }
}

export default Box
