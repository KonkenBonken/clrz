class Color {
  get x() { return this.pos.x; }
  get y() { return this.pos.y; }

  constructor(x, y, clr) {
    this.pos = vec(x, y);
    this.clr = clr;
  }

  get tile() {
    return tileAt(this.pos);
  }

  tick() {
    if (this.tile.type === 'belt')
      this.pos.add(faceToVec(this.tile.faces.findIndex(v => v === 2)))
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