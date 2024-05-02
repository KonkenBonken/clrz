class Tile {
  get x() { return this.pos.x; }
  get y() { return this.pos.y; }

  constructor(x, y) {
    this.pos = vec(x, y);
    this.faces = [0, 0, 0, 0]; // 0:no, 1:in, 2:out
  }

  faceTile(face) {
    return tileAt(faceToVec(face).add(this.pos));
  }

  setType(type, dir = 1) {
    this.type = type;
    switch (type) {
      case 'generator':
        this.faces = [0, 0, 0, 0];
        this.faces[dir] = 2;
        this.clr = [255, 0, 0];
        break;
      case 'belt':
        this.faces = [0, 0, 0, 0];
        this.faces[dir] = 2;
        this.faces[dir + 2 % 4] = 1;
        break;
    }
  }

  tick() {
    if (this.type === 'generator')
      for (let i = 0; i < 4; i++) {
        const face = this.faces[i];
        const tile = this.faceTile(i);
        if (face === 2)
          tile.summon(i, this.clr);
      }
  }

  summon(face, clr) {
    const pos = faceToVec(face).add(this.pos);

    if (!colors.some(color => color.x === pos.x && color.y === pos.y))
      colors.push(new Color(pos.x, pos.y, clr));
  }

  draw(tileSize) {
    switch (this.type) {
      case 'generator':
        fill(100);
        break
      case 'belt':
        fill(150);
        break
      default:
        noFill();
    }

    square(
      this.x * tileSize,
      this.y * tileSize,
      tileSize
    );
  }
}