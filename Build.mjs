const _Build = () => class Build {
  static tiles = [Belt, Mixer, Trash];
  static drawTiles = this.tiles.map((Tile, i) => new Tile(11, i * 9 / this.tiles.length + 1.5, 1));

  static selected = null;

  static draw() {
    for (const tile of this.drawTiles) {
      tile.draw();
      if (tile.isHovered || tile.type === this.selected?.type) {
        fill(255, 70);
        noStroke();
        square(tile.x * tileSize, tile.y * tileSize, tileSize);
        cursor(HAND);
      }
    }

    fill(220);
    noStroke();
    rect(10 * tileSize, 0, tileSize, 10 * tileSize);

    if (Build.selected)
      Build.selected.draw();
  }
}

function mouseClicked() {
  const tileClass = Build.drawTiles.find(tile => tile.isHovered)?.__proto__.constructor;
  if (tileClass)
    Build.selected = new tileClass(mouseX / tileSize, mouseY / tileSize, 1);

  else if (Build.selected) {
    const pos = vec(Math.floor(mouseX / tileSize), Math.floor(mouseY / tileSize)),
      tileClass = Build.selected?.__proto__.constructor;

    if (0 <= pos.x && pos.x < 10 && 0 <= pos.y && pos.y < 10)
      tileClass.build(pos.x, pos.y, 1);
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