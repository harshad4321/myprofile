
class Mouse {
  constructor(canvas) {
    this.pos = new Vector(-1000, -1000)
    this.radius = 40

    canvas.onmousemove = e => this.pos.setXY(e.clientX, e.clientY)
    canvas.ontouchmove = e => this.pos.setXY(e.touches[0].clientX, e.touches[0].clientY)
    canvas.ontouchcancel = () => this.pos.setXY(-1000, -1000)
    canvas.ontouchend = () => this.pos.setXY(-1000, -1000)
  }
}

class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y)
    this.oldPos = new Vector(x, y)

    this.friction = 0.97
    this.gravity = new Vector(0, 0.6)
    this.mass = 1

    this.pinned = false

    this.lightImg = document.querySelector('#light-img')
    this.lightSize = 15;
  }
}