import Scene from './scene'
import { Vertex } from './vertex'
import Box from './box'

(function () {
  const scene = new Scene()

  // First render
  scene.render()

  const dx = scene.canvas.width / 2
  const dy = scene.canvas.height / 2
  const maxD = distance(0, 0, dx, dy)
  const w = 24
  const rotationX = -35
  const rotationY = -30
  const rotationZ = -20

  let angle = 0

  function wave () {
    // Remove all objects in scene
    scene.cleatObjects()

    for (let z = 0; z < scene.canvas.height; z += w) {
      for (let x = scene.canvas.width; x > 0; x -= w) {
        const d = distance(x, z, dx, dy)
        const offset = map(d, 0, maxD, -Math.PI, Math.PI)
        const a = angle + offset
        const h = Math.floor(map(Math.sin(a), -1, 1, 0, 300))
        const position = new Vertex(x - dx, z - dy, 0)
        const box = new Box(position, w, h)
        box.rotate(rotationX, rotationY, rotationZ)

        // Add in scene
        scene.addObject(box)
      }
    }
    angle -= 0.1
  }

  function map (value, inMin, inMax, outMin, outMax) {
    // Clamp value
    if (value < inMin) value = inMin
    else if (value > inMax) value = inMax

    // Re-map value
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
  }

  function distance (x1, y1, x2, y2) {
    const a = x1 - x2
    const b = y1 - y2

    return Math.sqrt(a * a + b * b)
  }

  // Converts from degrees to radians.
  Math.radians = function (degrees) {
    return degrees * Math.PI / 180
  }

// Converts from radians to degrees.
  Math.degrees = function (radians) {
    return radians * 180 / Math.PI
  }

  setInterval(() => {
    wave()
    scene.render()
  }, 25)
})()
