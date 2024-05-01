let gridSize, grid;

class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.faces = [0, 0, 0, 0]; // 0:no, 1:in, 2:out
  }

  setType(type) {
    this.type = type;
    switch (type) {
      case 'generator':
        this.faces = [0, 2, 0, 0];
      case 'belt':
        this.faces = [0, 2, 0, 1];
    }
  }

  draw(size) {
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

  grid[1][1].setType('generator');
  grid[1][2].setType('belt');
  grid[1][3].setType('belt');
}

function draw() {
  background(220);
  stroke(0);

  const tileSize = min(width / gridSize.x, height / gridSize.y);

  for (const row of grid)
    for (const tile of row)
      tile.draw(tileSize);
}