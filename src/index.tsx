import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Game from './components/Game';
import './styles/index.scss';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <StrictMode>
    {Game.Render()}
  </StrictMode>
);
