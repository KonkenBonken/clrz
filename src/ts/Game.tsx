import JSX from './jsx';
import { Source, Belt, Direction } from './TileContent';
import Tile from './Tile';

const gridSize = 10;
const tickSpeed = 2000;
const gridEl = <main id="grid" />
const grid: Tile[] = [];

document.body.append(gridEl);

for (let y = 0; y < gridSize; y++)
  for (let x = 0; x < gridSize; x++)
    grid.push(new Tile(x, y, gridEl));

// @ts-expect-error
window.grid = grid;

export function tileAt(x: number, y: number) {
  return grid[y * gridSize + x];
}

grid[99].content = new Source(grid[99], [255, 0, 0]);
grid[36].content = new Source(grid[36], [0, 0, 255]);
grid[0].content = new Source(grid[0], [0, 255, 0]);
grid[10].content = new Belt(grid[10], Direction.Down);
grid[11].content = new Belt(grid[11], Direction.Right);

function gameTick() {
  for (let y = 0; y < gridSize; y++)
    for (let x = 0; x < gridSize; x++)
      tileAt(x, y).gameTick();
}

gameTick();
//setInterval(gameTick, tickSpeed)
