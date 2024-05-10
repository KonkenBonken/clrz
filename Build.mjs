const _Build = () => class Build {
  static tiles = [Belt, Mixer, Trash, Eraser];
  static drawTiles = this.tiles.map((Tile, i) => new Tile(11, i * 9 / this.tiles.length + 1.5, 1));

  static selected = null;

  static draw() {
    for (const tile of this.drawTiles) {
      tile.draw();
      if (tile.isHovered || tile.type === this.selected?.type) {
        fill(360, 100);
        noStroke();
        square(tile.x * tileSize, tile.y * tileSize, tileSize);
        cursor(HAND);
      }
    }

    fill(310);
    noStroke();
    rect(10 * tileSize, 0, tileSize, 10 * tileSize);

    if (Build.selected)
      Build.selected.draw();
  }
}

function mouseClicked() {
  const tileClass = Build.drawTiles.find(tile => tile.isHovered)?.__proto__.constructor;
  if (tileClass)
    Build.selected = new tileClass(mouseX / tileSize, mouseY / tileSize, Build.selected?.dir ?? 1);

  else if (Build.selected) {
    const pos = vec(Math.floor(mouseX / tileSize), Math.floor(mouseY / tileSize));
    if (pos.x >= 10)
      Build.selected = null;

    else {
      const tileClass = Build.selected?.__proto__.constructor;

      if (0 <= pos.x && pos.x < 10 && 0 <= pos.y && pos.y < 10)
        tileClass.build(pos.x, pos.y, Build.selected?.dir);
    }
  }
}

function mouseMoved() {
  if (Build.selected) {
    let pos = vec(Math.floor(mouseX / tileSize), Math.floor(mouseY / tileSize));

    if (0 > pos.x || pos.x >= 10)
      pos = vec(mouseX / tileSize, mouseY / tileSize);

    Build.selected.pos.set(pos);
  }
}

function keyPressed() {
  if (key === 'r' && Build.selected) {
    Build.selected.dir++;
    Build.selected.dir %= 4;
  }
}

class Eraser extends Tile {
  type = 'eraser'

  static build(x, y) {
    grid[y][x] = new Tile(x, y);

    const clrs = Color.ats(vec(x, y));
    console.log(clrs)
    colors = colors.filter(clr => !clrs.includes(clr));
  }

  draw() {
    noStroke();
    fill(320, 60, 0, 140);
    square(
      this.x * tileSize,
      this.y * tileSize,
      tileSize
    );
  }
}