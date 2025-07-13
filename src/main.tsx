import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('Root container not found');
}

createRoot(rootContainer).render(
  <StrictMode>
    <App />
  </StrictMode>
);
