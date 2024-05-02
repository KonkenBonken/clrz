class Tile {
  static build(x, y, ...args) {
    grid[y][x] = new this(x, y, ...args);
  }

  get x() { return this.pos.x; }
  get y() { return this.pos.y; }

  constructor(x, y) {
    this.pos = vec(x, y);
    this.faces = [0, 0, 0, 0]; // 0:no, 1:in, 2:out
  }

  faceTile(face) {
    return tileAt(faceToVec(face).add(this.pos));
  }

  tick() { }

  summon(face, clr) {
    const pos = faceToVec(face).add(this.pos);

    if (!colors.some(color => color.x === pos.x && color.y === pos.y))
      colors.push(new Color(pos.x, pos.y, clr));
  }

  draw(tileSize) {
    noFill();
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
    this.clr = clr;
    this.faces[dir] = 2;
  }

  tick() {
    for (let i = 0; i < 4; i++) {
      const face = this.faces[i];
      const tile = this.faceTile(i);
      if (face === 2)
        tile.summon(i, this.clr);
    }
  }

  draw(tileSize) {
    fill(100);
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
    super(x, y)
    this.faces[dir] = 2;
    this.faces[dir + 2 % 4] = 1;
  }

  draw(tileSize) {
    fill(150);
    square(
      this.x * tileSize,
      this.y * tileSize,
      tileSize
    );
  }
}
