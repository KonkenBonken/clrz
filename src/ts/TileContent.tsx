import JSX from './jsx';
import Tile from './Tile';
import { tileAt } from './Game';

export abstract class TileContent {
  abstract element: HTMLDivElement;
  public gameTick?(): void;
}

export class Source extends TileContent {
  element = <div
      className="source"
      style={{
        outlineColor: `rgb(${this.color.join()})`
    } as CSSStyleDeclaration}
  />;

  constructor(readonly tile: Tile, readonly color: color) {
    super();
  }
}

export const enum Direction {
  Up, Right, Down, Left
}

export class Belt extends TileContent {
  private _holding?: color;

  element: HTMLDivElement = <div
    className="belt"
    style={{
      rotate: this.direction * 90 + 'deg'
    } as CSSStyleDeclaration}
  />;

  constructor(readonly tile: Tile, readonly direction: Direction) {
    super();
  }

  get holding() {
    return this._holding
  }

  set holding(holding) {
    this._holding = holding;

    if (holding)
      this.element.replaceChildren(<div
        className='item'
      style={{
          backgroundColor: `rgb(${holding.join()})`
        } as CSSStyleDeclaration}
      />);
    else this.element.replaceChildren();
  }

  get from() {
    switch (this.direction) {
      case Direction.Up:
        return tileAt(this.tile.x, this.tile.y + 1);
      case Direction.Right:
        return tileAt(this.tile.x - 1, this.tile.y);
      case Direction.Down:
        return tileAt(this.tile.x, this.tile.y - 1);
      case Direction.Left:
        return tileAt(this.tile.x + 1, this.tile.y);
    }
  }

  get to() {
    switch (this.direction) {
      case Direction.Up:
        return tileAt(this.tile.x, this.tile.y - 1);
      case Direction.Right:
        return tileAt(this.tile.x + 1, this.tile.y);
      case Direction.Down:
        return tileAt(this.tile.x, this.tile.y + 1);
      case Direction.Left:
        return tileAt(this.tile.x - 1, this.tile.y);
    }
  }

  gameTick() {
    const source = this.from.content;
    if (source instanceof Source)
      this.holding = source.color;
    if (source instanceof Belt)
      this.holding = source.holding;
  }
}