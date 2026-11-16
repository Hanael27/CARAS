import React from 'react';
import { act, screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import BackToTop from '../components/BackToTop/BackToTop';

function scrollTo(y: number) {
  act(() => {
    Object.defineProperty(window, 'scrollY', { value: y, configurable: true });
    window.dispatchEvent(new Event('scroll'));
  });
}

describe('BackToTop', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    scrollTo(0);
  });

  it('no se muestra al inicio de la página', () => {
    renderWithTheme(<BackToTop />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('aparece con nombre accesible después de bajar', () => {
    renderWithTheme(<BackToTop />);

    scrollTo(900);

    expect(
      screen.getByRole('button', { name: 'Volver al inicio de la página' })
    ).toBeInTheDocument();
  });

  it('sube al inicio y mueve el foco a la primera sección al activarse', () => {
    renderWithTheme(
      <>
        <section id="inicio" tabIndex={-1} />
        <BackToTop />
      </>
    );

    scrollTo(900);
    fireEvent.click(screen.getByRole('button', { name: 'Volver al inicio de la página' }));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0 });
    expect(document.getElementById('inicio')).toHaveFocus();
  });
});
