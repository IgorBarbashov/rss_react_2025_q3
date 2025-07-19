import { render } from '@testing-library/react';
import { App } from './App';
import { expect } from 'vitest';

describe('App', () => {
  describe('render test', () => {
    it('Should render "Crash App" button', () => {
      const { queryByTestId } = render(<App />);

      const ebb = queryByTestId('CrashApp:button');
      expect(ebb).toBeInTheDocument();
    });
  });
});
