class Color {
  get x() { return this.pos.x; }
  get y() { return this.pos.y; }

  constructor(x, y, clr) {
    this.pos = vec(x, y);
    this.clr = clr;
  }

  get tile() {
    return grid[round(this.y)][round(this.x)];
  }

  tick() {
    if (this.tile.type === 'belt') {
      switch (this.tile.faces.findIndex(v => v === 2)) {
        case 0:
          this.pos.y -= 1;
          break
        case 1:
          this.pos.x += 1;
          break
        case 2:
          this.pos.y += 1;
          break
        case 3:
          this.pos.x -= 1;
          break
      }
    }
  }

  draw(tileSize) {
    fill(...this.clr);

    circle(
      this.x * tileSize + tileSize * .5,
      this.y * tileSize + tileSize * .5,
      tileSize * .8
    );
  }
}