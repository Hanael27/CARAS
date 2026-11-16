import React from 'react';
import axe from 'axe-core';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Auditoría automática con axe-core sobre la página completa.
// La regla color-contrast se desactiva porque jsdom no calcula estilos reales;
// los contrastes se verifican en contrast.test.ts a partir de los colores del tema.
async function audit(): Promise<string[]> {
  const results = await axe.run(document.body, {
    rules: { 'color-contrast': { enabled: false } },
  });
  return results.violations.map(
    (violation) => `${violation.id}: ${violation.nodes.map((node) => node.target).join(' | ')}`
  );
}

describe('Accesibilidad de la página completa', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('no tiene violaciones de axe-core en el tema claro', async () => {
    render(<App />);

    expect(await audit()).toEqual([]);
  });

  it('no tiene violaciones de axe-core en el tema oscuro', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('switch', { name: 'Modo oscuro' }));

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    expect(await audit()).toEqual([]);
  });

  it('no tiene violaciones de axe-core con errores de formulario visibles', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Suscribirme' }));

    expect(await audit()).toEqual([]);
  });

  it('declara el idioma del documento en español', () => {
    // El atributo vive en public/index.html; aquí se comprueba el archivo fuente.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const html: string = require('fs').readFileSync('public/index.html', 'utf8');

    expect(html).toMatch(/<html lang="es">/);
  });

  it('tiene un solo h1, un main y un único contentinfo', () => {
    render(<App />);

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getAllByRole('main')).toHaveLength(1);
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1);
  });

  it('el enlace para saltar al contenido es el primer elemento enfocable', () => {
    render(<App />);

    const skipLink = screen.getByRole('link', { name: 'Saltar al contenido principal' });
    expect(skipLink).toHaveAttribute('href', '#contenido-principal');
    expect(document.getElementById('contenido-principal')).toBeInTheDocument();
    expect(document.body.querySelector('a, button')).toBe(skipLink);
  });

  it('todas las imágenes tienen un texto alternativo descriptivo', () => {
    const { container } = render(<App />);

    const images = Array.from(container.querySelectorAll('img'));
    expect(images.length).toBeGreaterThanOrEqual(5);
    images.forEach((image) => {
      expect(image.getAttribute('alt')).toBeTruthy();
    });
  });
});
