/// <reference path="./@types/global.d.ts" />

let gridSize, grid, tileSize, vec;
let colors = [], level = 0;

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

function setup() {
  vec = createVector;

  createCanvas(
    min(document.body.clientWidth, document.body.clientHeight),
    min(document.body.clientWidth, document.body.clientHeight)
  );
  frameRate(30);

  gridSize = vec(10, 10);
  grid = Array(gridSize.y).fill().map((_, y) => Array(gridSize.x).fill().map((_, x) => new Tile(x, y)));
  tileSize = min(width / gridSize.x, height / gridSize.y);

  Levels[level].setup();
}

function draw() {
  background(220);
  stroke(0);

  if (frameCount % 20 === 0) {
    for (const row of grid)
      for (const tile of row)
        tile.tick();
    for (const color of colors)
      color.tick();
  }

  for (const row of grid)
    for (const tile of row.filter(tile => tile.type && tile.type === 'belt'))
      tile.draw();
  for (const row of grid)
    for (const tile of row.filter(tile => !tile.type))
      tile.draw();
  for (const row of grid)
    for (const tile of row.filter(tile => tile.type !== 'belt'))
      tile.draw();


  for (const color of colors)
    color.draw();
}