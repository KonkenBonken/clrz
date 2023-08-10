import JSX from './jsx';
import { Source, Belt, Direction } from './TileContent';
import Tile from './Tile';

const gridSize = 10;
const gridEl = <main id="grid" />
const grid: Tile[] = [];

document.body.append(gridEl);


for (let y = 0; y < gridSize; y++)
  for (let x = 0; x < gridSize; x++)
    grid.push(new Tile(x, y, gridEl));

// @ts-expect-error
window.grid = grid;

grid[99].content = new Source([255, 0, 0]);
grid[36].content = new Source([0, 0, 255]);
grid[0].content = new Source([0, 255, 0]);
grid[10].content = new Belt(Direction.Down);
