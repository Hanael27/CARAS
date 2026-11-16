import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import Hero from '../components/Hero/Hero';

describe('Hero', () => {
  const renderHero = () =>
    renderWithTheme(<Hero imageSrc="/img/Logo-Caras.png" imageAlt="Logotipo de CARAS" />);

  it('tiene el único encabezado de nivel 1 de la página', () => {
    renderHero();

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('Lo mejor del entretenimiento, moda y lifestyle');
  });

  it('marca con lang="en" las palabras en inglés', () => {
    const { container } = renderHero();

    const englishWords = Array.from(container.querySelectorAll('[lang="en"]')).map(
      (element) => element.textContent
    );
    expect(englishWords).toEqual(['lifestyle', 'newsletter']);
  });

  it('ofrece un llamado a la acción que lleva al formulario', () => {
    renderHero();

    expect(screen.getByRole('link', { name: /quiero suscribirme/i })).toHaveAttribute(
      'href',
      '#suscripcion'
    );
    expect(screen.getByRole('link', { name: /conocer los beneficios/i })).toHaveAttribute(
      'href',
      '#beneficios'
    );
  });

  it('renderiza la imagen con su texto alternativo', () => {
    renderHero();

    expect(screen.getByAltText('Logotipo de CARAS')).toHaveAttribute('src', '/img/Logo-Caras.png');
  });
});
