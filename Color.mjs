class Color {
  get x() { return this.pos.x; }
  get y() { return this.pos.y; }

  constructor(x, y, clr) {
    this.pos = vec(x, y);
    this.prevPos = this.pos;
    this.clr = clr;
  }

  get tile() {
    return tileAt(this.pos);
  }

  tick() {
    if (this.tile.type === 'belt') {
      this.prevPos = this.pos.copy();
      this.pos.add(faceToVec(this.tile.faces.findIndex(v => v === 2)));
    }
  }

  draw() {
    const pos = this.prevPos.slerp(this.pos, frameCount % 20 / 20);

    fill(...this.clr);
    circle(
      pos.x * tileSize + tileSize * .5,
      pos.y * tileSize + tileSize * .5,
      tileSize * .8
    );
  }
}