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
    this.inside = 0;
  }

  get tile() {
    return Tile.at(this.pos);
  }

  tick() {
    this.prevPos.set(this.pos);

    this.inside = this.inside ? 2 : 0;

    switch (this.tile.type) {
      case 'belt': {
        const newPos = this.pos.copy().add(faceToVec(this.tile.faces.findIndex(v => v === 2)));

        const nextTile = Tile.at(newPos),
          dir = this.pos.angleBetween(newPos);
        if (nextTile.type === 'mixer' && !nextTile.content[dir]) {
          this.pos = newPos;
          this.inside = 1;
          nextTile.content[dir] = this;
        }

        else if (!Color.at(newPos))
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

    let size = .8;

    if (this.inside === 1)
      size = map(frameCount % 20, 0, 20, size, .2);
    else if (this.inside === 2)
      size = .2;


    fill(...this.clr);
    circle(
      pos.x,
      pos.y,
      tileSize * size
    );
  }
}