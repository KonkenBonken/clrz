import JSX from './jsx';
import { TileState } from './enums';
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

grid[99].state = TileState.Green;
grid[0].state = TileState.Blue;
grid[39].state = TileState.Red;
