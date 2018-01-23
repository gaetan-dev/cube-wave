import { Vertex2D } from './vertex'

class Scene {
  constructor () {
    // Fix the canvas width and height
    this.canvas = document.getElementById('cnv')
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
    this.canvas.style.background = '#FAF9FA'

    this.dx = this.canvas.width / 2
    this.dy = this.canvas.height / 2

    // Context style
    this.ctx = this.canvas.getContext('2d')
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)'
    this.ctx.fillStyle = 'rgba(0, 150, 255, 0.3)'

    // Objects
    this.objects = []
  }

  addObject (object) {
    this.objects.push(object)
  }

  cleatObjects () {
    this.objects = []
  }

  render () {
    // Clear the previous frame
    this.ctx.clearRect(0, 0, 2 * this.dx, 2 * this.dy)

    // For each object
    for (let object of this.objects) {
      // For each face
      object.faces.forEach((face, index) => {
        if (index === 5) { return }

        // Draw the first vertex
        let P = this.orthographicProject(face.vertices[0])
        this.ctx.beginPath()
        this.ctx.moveTo(P.x + this.dx, -P.y + this.dy)

        // Draw the other vertices
        for (let k = 1; k < face.vertices.length; k++) {
          P = this.orthographicProject(face.vertices[k])
          this.ctx.lineTo(P.x + this.dx, -P.y + this.dy)
        }

        switch (index) {
          case 0:
            this.ctx.fillStyle = '#E3DCAA'
            break
          case 1:
            this.ctx.fillStyle = '#E3DCAA'
            break
          case 3:
            this.ctx.fillStyle = '#394A77'
            break
          case 4:
            this.ctx.fillStyle = '#84AFA7'
            break
        }

        // Close the path and draw the face
        this.ctx.closePath()
        // this.ctx.stroke()
        this.ctx.fill()
      })
    }
  }

  orthographicProject (M) {
    return new Vertex2D(M.x, M.z)
  }

  perspectiveProject (M) {
    // Distance between the camera and the plane
    const d = 200
    const r = d / M.y

    return new Vertex2D(r * M.x, r * M.z)
  }
}

export default Scene
