import React from 'react';

import { GameObject, GameObjectType } from '../types';

export default class Tile {
  object: GameObject = {
    type: GameObjectType.None
  };

  constructor(readonly x: number, readonly y: number) { }

  get renderable() {
    return this.object.type !== GameObjectType.None;
  }

  Render() {
    return <div
      style={{
        left: this.x * 10 + '%',
        top: this.y * 10 + '%',
      }}
    ></div>;
  }
}
