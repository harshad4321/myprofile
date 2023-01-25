
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

  update(mouse) {
    if (this.pinned) return

    let vel = Vector.sub(this.pos, this.oldPos)

    this.oldPos.setXY(this.pos.x, this.pos.y)

    vel.mult(this.friction)
    vel.add(this.gravity)

    let { x: dx, y: dy } = Vector.sub(mouse.pos, this.pos)
    const dist = Math.sqrt(dx * dx + dy * dy)

    const direction = new Vector(dx / dist, dy / dist)

    const force = Math.max((mouse.radius - dist) / mouse.radius, 0)

    if (force > 0.6) this.pos.setXY(mouse.pos.x, mouse.pos.y)
    else {
      this.pos.add(vel)
      this.pos.add(direction.mult(force))
    }
  }

  drawLight(ctx) {
    ctx.drawImage(
      this.lightImg,
      this.pos.x - this.lightSize / 2, this.pos.y - this.lightSize / 2, this.lightSize, this.lightSize
    )
  }

  draw(ctx) {
    ctx.fillStyle = '#aaa'
    ctx.fillRect(this.pos.x - this.mass, this.pos.y - this.mass, this.mass * 2, this.mass * 2)
  }
}

class Stick {
  constructor(p1, p2) {
    this.startPoint = p1
    this.endPoint = p2

    this.length = this.startPoint.pos.dist(this.endPoint.pos)
    this.tension = 0.3
  }

  update() {
    const dx = this.endPoint.pos.x - this.startPoint.pos.x
    const dy = this.endPoint.pos.y - this.startPoint.pos.y

    const dist = Math.sqrt(dx * dx + dy * dy)
    const diff = (dist - this.length) / dist

    const offsetX = diff * dx * this.tension
    const offsetY = diff * dy * this.tension

    const m = this.startPoint.mass + this.endPoint.mass
    const m1 = this.endPoint.mass / m
    const m2 = this.startPoint.mass / m

    if (!this.startPoint.pinned) {
      this.startPoint.pos.x += offsetX * m1
      this.startPoint.pos.y += offsetY * m1
    }
    if (!this.endPoint.pinned) {
      this.endPoint.pos.x -= offsetX * m2
      this.endPoint.pos.y -= offsetY * m2
    }
  }
