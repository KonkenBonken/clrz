import JSX from './jsx';
import {
  TileState, isSource, isExtractor,
  isBlue, isGreen, isRed
} from './enums';
import GameObject from './GameObject';

export default class Tile extends GameObject<HTMLDivElement> {
  private _state: TileState = TileState.None;

  constructor(
    readonly x: number,
    readonly y: number,
    readonly gridEl: HTMLElement
  ) {
    super(gridEl);
  }

  get state() {
    return this._state
  }

  set state(state) {
    this._state = state;

    if (state == TileState.None)
      this.element = undefined;
    else
      this.element = (
        <div style={{
          left: this.x * 10 + '%',
          top: this.y * 10 + '%',
          outlineColor: this.displayColor
        } as CSSStyleDeclaration} />
      )
  }

  get isSource() {
    return isSource(this.state);
  }

  get isExtractor() {
    return isExtractor(this.state);
  }

  get displayColor() {
    if (isBlue(this.state))
      return 'blue';
    else if (isGreen(this.state))
      return 'green';
    else if (isRed(this.state))
      return 'red';
  }
}