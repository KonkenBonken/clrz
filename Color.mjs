class Color {
  get x() { return this.pos.x; }
  get y() { return this.pos.y; }

  static at(pos) {
    return colors.find(color => color.pos.equals(pos));
  }

  constructor(x, y, clr) {
    this.pos = vec(x, y);
    this.prevPos = this.pos;
    this.clr = clr;
  }

  get tile() {
    return Tile.at(this.pos);
  }

  tick() {
    if (this.tile.type === 'belt') {
      this.prevPos = this.pos.copy();
      this.pos.add(faceToVec(this.tile.faces.findIndex(v => v === 2)));
    } else
      this.prevPos.set(this.pos);
  }

  draw() {
    const pos = this.prevPos.copy()
      .slerp(this.pos, frameCount % 20 / 20)
      .add(.5, .5)
      .mult(tileSize);

    fill(...this.clr);
    circle(
      pos.x,
      pos.y,
      tileSize * .8
    );
  }
}