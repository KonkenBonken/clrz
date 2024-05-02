let gridSize, grid, colors = [];

function setup() {
  createCanvas(
    min(document.body.clientWidth, document.body.clientHeight),
    min(document.body.clientWidth, document.body.clientHeight)
  );
  frameRate(20);

  gridSize = createVector(10, 10);
  grid = Array(gridSize.y).fill().map((_, y) => Array(gridSize.x).fill().map((_, x) => new Tile(x, y)));

  grid[1][1].setType('generator');
  grid[1][2].setType('belt', 1);
  grid[1][3].setType('belt', 1);
  grid[1][4].setType('belt', 2);
  grid[2][4].setType('belt', 1);
}

function draw() {
  background(220);
  stroke(0);

  const tileSize = min(width / gridSize.x, height / gridSize.y);

  if (frameCount % 20 === 0) {
    for (const row of grid)
      for (const tile of row)
        tile.tick();
    for (const color of colors)
      color.tick();
  }

  for (const row of grid)
    for (const tile of row)
      tile.draw(tileSize);

  for (const color of colors)
    color.draw(tileSize);
}