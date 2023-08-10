import JSX from './jsx';

export abstract class TileContent {
  get isSource(): boolean {
    return this instanceof Source;
  }

  abstract get element(): HTMLDivElement;
}

type color = [r: number, g: number, b: number];

export class Source extends TileContent {
  constructor(readonly color: color) {
    super();
  }

  get element() {
    return <div
      className="source"
      style={{
        outlineColor: `rgb(${this.color.join()})`
      } as CSSStyleDeclaration
      }
    />;
  };
}

export const enum Direction {
  Up, Right, Down, Left
}

export class Belt extends TileContent {
  constructor(readonly direction: Direction) {
    super();
  }

  get element() {
    return <div
      className="belt"
      style={{
        rotate: this.direction * 90 + 'deg'
      } as CSSStyleDeclaration
      }
    />;
  };
}