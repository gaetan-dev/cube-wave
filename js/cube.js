import { Vertex } from './vertex'
import Face from './face'

class Cube {
  constructor (center, size) {
    this.position = center
    this.size = size
    // Generate the vertices
    const d = size / 2

    this.vertices = [
      new Vertex(center.x - d, center.y - d, center.z + d),
      new Vertex(center.x - d, center.y - d, center.z - d),
      new Vertex(center.x + d, center.y - d, center.z - d),
      new Vertex(center.x + d, center.y - d, center.z + d),
      new Vertex(center.x + d, center.y + d, center.z + d),
      new Vertex(center.x + d, center.y + d, center.z - d),
      new Vertex(center.x - d, center.y + d, center.z - d),
      new Vertex(center.x - d, center.y + d, center.z + d)
    ]

    // Generate the faces
    this.faces = [
      new Face(this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]),
      new Face(this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]),
      new Face(this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]),
      new Face(this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]),
      new Face(this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]),
      new Face(this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2])
    ]
  }

  rotate (x, y, z) {
    for (let vertex of this.vertices) {
      vertex.rotate(x, y, z)
    }
  }
}

export default Cube
