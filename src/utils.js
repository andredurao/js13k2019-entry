/**
 * Some mathematical utilities
 */

export function sign (x) {
  if (x > 0) return 1
  if (x < 0) return -1
  return 0
}

export function clamp (x, min, max) {
  return Math.min(Math.max(x, min), max)
}

export function approach (x, target, acc) {
  return x > target ? Math.max(x - acc, target) : Math.min(x + acc, target)
}

export function overlapping (rect1, rect2) {
  return (
    rect1.x + rect1.width > rect2.x && rect1.x < rect2.x + rect2.width &&
    rect1.y + rect1.height > rect2.y && rect1.y < rect2.y + rect2.height
  )
}

export function manhattanDistance (x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

export function distanceSquared(x1, y1, x2, y2) {
  let dx = Math.abs(x1 - x2)
  let dy = Math.abs(y1 - y2)
  return dx * dx + dy * dy
}

export function randomInt (upper) {
  return Math.floor(upper * Math.random())
}

export let forRectangularRegion = (x0, y0, x1, y1, callback) => {
  for (let yi = y0; yi <= y1; yi++) {
    for (let xi = x0; xi <= x1; xi++) {
      callback(xi, yi)
    }
  }
}

/**
 * Image generation utilities
 */

export async function generateImage (width, height, callback) {
  let canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  await callback(canvas.getContext('2d'))

  // We could technically return the canvas, but having lots of canvases is slower
  // than having lots of images. Sure the generation time goes up, but at least
  // the gameplay doesn't suffer as much.

  let blob = await new Promise(resolve => canvas.toBlob(resolve))

  return new Promise(resolve => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.src = URL.createObjectURL(blob)
  })
}

/**
 * Color utilities
 */

export function makeColorWithAlpha (color, alpha) {
  let [_, type, args] = /^(\w+)\((.*)\)$/.exec(color)
  return `${type}(${args},${alpha})`
}

/**
 * Waiting for the next frame is useful for preventing the browser to hang
 * while the assets are being generated
 */
export async function waitForNextFrame () {
  await new Promise(resolve => requestAnimationFrame(resolve))
}
