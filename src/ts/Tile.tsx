import GameObject from './GameObject';
import { TileContent } from './TileContent';

export default class Tile extends GameObject<HTMLDivElement> {
  private _content?: TileContent;

  set content(content) {
    this._content = content;
    if (content) {
      this.element = content.element;
      this.element.style.left = this.x * 10 + '%';
      this.element.style.top = this.y * 10 + '%';
    }
  }

  get content() {
    return this._content;
  }

  constructor(
    readonly x: number,
    readonly y: number,
    gridEl: HTMLElement
  ) {
    super(gridEl);
  }

  gameTick() {
    if (this.content?.gameTick)
      this.content.gameTick()
  }
}