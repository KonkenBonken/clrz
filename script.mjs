let gridSize, grid;

class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  draw(size) {
    square(
      this.x * size,
      this.y * size,
      size
    );
  }
}

function setup() {
  createCanvas(
    min(document.body.clientWidth, document.body.clientHeight),
    min(document.body.clientWidth, document.body.clientHeight)
  );

  gridSize = createVector(10, 10);
  grid = Array(gridSize.y).fill().map((_, y) => Array(gridSize.x).fill().map((_, x) => new Tile(x, y)));
}

function draw() {
  background(220);
  stroke(0);

  const tileSize = min(width / gridSize.x, height / gridSize.y);

  for (const row of grid)
    for (const tile of row)
      tile.draw(tileSize);
}