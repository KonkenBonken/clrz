/// <reference path="./@types/global.d.ts" />

let gridSize, grid, vec, colors = [];

function faceToVec(face) {
  switch (face) {
    case 0:
      return vec(0, -1);
    case 1:
      return vec(+1, 0);
    case 2:
      return vec(0, +1);
    case 3:
      return vec(-1, 0);
  }
}

function tileAt({ x, y }) {
  return grid[y][x];
}

function setup() {
  vec = createVector;

  createCanvas(
    min(document.body.clientWidth, document.body.clientHeight),
    min(document.body.clientWidth, document.body.clientHeight)
  );
  frameRate(20);

  gridSize = vec(10, 10);
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