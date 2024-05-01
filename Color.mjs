class Color {
  constructor(x, y, clr) {
    this.x = x;
    this.y = y;
    this.clr = clr;
  }

  get tile() {
    return grid[round(this.y)][round(this.x)];
  }

  tick() {
    if (this.tile.type === 'belt') {
      switch (this.tile.faces.findIndex(v => v === 2)) {
        case 0:
          this.y -= .1
          break
        case 1:
          this.x += .1
          break
        case 2:
          this.y += .1
          break
        case 3:
          this.x -= .1
          break
      }
      this.x = +this.x.toFixed(2);
      this.y = +this.y.toFixed(2);
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