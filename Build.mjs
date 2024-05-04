const _Build = () => class Build {
  static tiles = [Belt, Mixer, Trash];
  static drawTiles = this.tiles.map((Tile, i) => new Tile(11, i * 9 / this.tiles.length + 1.5, 1));

  static draw() {
    for (const tile of this.drawTiles) {
      tile.draw();
    }

    fill(220);
    noStroke();
    rect(10 * tileSize, 0, tileSize, 10 * tileSize);
  }
}

