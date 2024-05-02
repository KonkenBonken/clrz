class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.faces = [0, 0, 0, 0]; // 0:no, 1:in, 2:out
  }

  getTile(face) {
    switch (face) {
      case 0:
        return grid[this.y - 1][this.x];
      case 1:
        return grid[this.y][this.x + 1];
      case 2:
        return grid[this.y + 1][this.x];
      case 3:
        return grid[this.y][this.x - 1];
    }
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
        const tile = this.getTile(i);
        if (face === 2)
          tile.summon(i, this.clr);
      }
  }

  summon(face, clr) {
    const pos = createVector();

    switch (face) {
      case 0:
        pos.set(this.x, this.y - 1);
        break
      case 1:
        pos.set(this.x + 1, this.y);
        break
      case 2:
        pos.set(this.x, this.y + 1);
        break
      case 3:
        pos.set(this.x - 1, this.y);
        break
    }

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