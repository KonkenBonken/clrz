import React from 'react';

import Tile from '../classes/Tile';
import { GameObjectType } from '../types';

class Game {
  gridSize = 10;
  tiles: Tile[][] = [];

  constructor() {
    for (let y = 0; y < this.gridSize; y++) {
      const row: Tile[] = [];
      this.tiles.push(row);
      for (let x = 0; x < this.gridSize; x++)
        row.push(new Tile(x, y));
    }
  }

  onClick(event: React.MouseEvent<HTMLElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const gameX = (event.clientX - left) / width;
    const gameY = (event.clientY - top) / height;

    this.getTileAtClientCoords(gameX, gameY).object.type = GameObjectType.Some;
  }


  getTileAtClientCoords(gameX: number, gameY: number) {
    const x = Math.floor(gameX * this.gridSize);
    const y = Math.floor(gameY * this.gridSize);

    return this.getTileAt(x, y);
  }

  getTileAt(x: number, y: number) {
    return this.tiles[y][x];
  }

  Render() {
    return <main
      onClick={e => this.onClick(e)}
    >
      {
        this.tiles
          .flat()
          .filter(tile => tile.renderable)
          .map(tile => tile.Render())
      }
    </main>;
  }
}

export default new Game();
