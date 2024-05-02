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
    this.prevPos.set(this.pos);

    switch (this.tile.type) {
      case 'belt': {
        const newPos = this.pos.copy().add(faceToVec(this.tile.faces.findIndex(v => v === 2)));

        if (!Color.at(newPos))
          this.pos = newPos;
        break
      }
      case 'trash': {
        colors = colors.filter(clr => clr !== this);
        break
      }
    }
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