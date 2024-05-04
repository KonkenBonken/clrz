const _Build = () => class Build {
  static tiles = [Belt, Mixer, Trash];
  static drawTiles = this.tiles.map((Tile, i) => new Tile(11, i * 9 / this.tiles.length + 1.5, 1));

  static selected = null;

  static draw() {
    for (const tile of this.drawTiles) {
      tile.draw();
      if (tile.isHovered) {
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
  Build.selected = new (Build.drawTiles.find(tile => tile.isHovered)?.__proto__.constructor)(mouseX / tileSize, mouseY / tileSize, 1);
}

function mouseMoved() {
  if (Build.selected)
    Build.selected.pos.set(mouseX / tileSize, mouseY / tileSize);
}