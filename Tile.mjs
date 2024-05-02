function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

class Tile {
  static build(x, y, ...args) {
    grid[y][x] = new this(x, y, ...args);
  }

  static at({ x, y }) {
    return grid[y][x];
  }

  get x() { return this.pos.x; }
  get y() { return this.pos.y; }

  constructor(x, y) {
    this.pos = vec(x, y);
    this.faces = [0, 0, 0, 0]; // 0:no, 1:in, 2:out
  }

  faceTile(face) {
    return Tile.at(faceToVec(face).add(this.pos));
  }

  tick() { }

  draw() {
    fill(220);
    stroke(0);
    strokeWeight(1);
    square(
      this.x * tileSize,
      this.y * tileSize,
      tileSize
    );
  }
}

class Generator extends Tile {
  type = 'generator'

  constructor(x, y, dir, clr) {
    super(x, y)
    this.dir = dir;
    this.clr = clr;
    this.faces[dir] = 2;
  }

  tick() {
    const nextPos = faceToVec(this.dir).add(this.pos);

    if (!Color.at(nextPos))
      colors.push(new Color(nextPos.x, nextPos.y, this.clr));
  }

  draw() {
    fill(100);
    stroke(0);
    strokeWeight(1);
    square(
      this.x * tileSize,
      this.y * tileSize,
      tileSize
    );
  }
}

class Belt extends Tile {
  type = 'belt'

  constructor(x, y, dir) {
    super(x, y);
    this.dir = dir;
    this.faces[dir] = 2;
    this.faces[dir + 2 % 4] = 1;
  }

  draw() {
    fill(150);
    noStroke();
    square(
      this.x * tileSize,
      this.y * tileSize,
      tileSize
    );

    stroke(100);
    strokeWeight(3);

    for (let i = -3; i <= 3; i++) {
      const point = this.pos.copy().add(.5, .5).add(faceToVec(this.dir).mult((i + frameCount % 20 / 20) / 5)).mult(tileSize);
      const heading = faceToVec(this.dir).rotate(-QUARTER_PI).mult(tileSize * -.2);
      const p1 = heading.copy(), p2 = heading.rotate(HALF_PI);

      p1.add(point);
      p2.add(point);

      line(
        point.x, point.y,
        p1.x, p1.y
      );
      line(
        point.x, point.y,
        p2.x, p2.y
      );
    }
  }
}

class Trash extends Tile {
  type = 'trash'

  constructor(x, y) {
    super(x, y)
    this.faces = [1, 1, 1, 1];
  }

  draw() {
    fill(100, 60, 50);
    stroke(0);
    strokeWeight(1);
    square(
      (this.x + .1) * tileSize,
      (this.y + .1) * tileSize,
      tileSize * .8
    );
  }
}