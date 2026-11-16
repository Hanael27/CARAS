import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';
import { Benefit } from '../types';

const BENEFITS: Benefit[] = [
  { id: 'a', icon: 'star', title: 'Noticias exclusivas', description: 'Primero que nadie.' },
  { id: 'b', icon: 'trend', title: 'Tendencias en moda', description: 'Cada temporada.' },
];

describe('FeaturedSection', () => {
  it('renderiza el título como encabezado y una tarjeta por beneficio', () => {
    renderWithTheme(<FeaturedSection title="¿Por qué suscribirte?" benefits={BENEFITS} />);

    expect(
      screen.getByRole('heading', { level: 2, name: '¿Por qué suscribirte?' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(BENEFITS.length);

    BENEFITS.forEach((benefit) => {
      expect(
        screen.getByRole('heading', { level: 3, name: benefit.title })
      ).toBeInTheDocument();
      expect(screen.getByText(benefit.description)).toBeInTheDocument();
    });
  });

  it('la sección está nombrada por su título (aria-labelledby)', () => {
    renderWithTheme(<FeaturedSection title="¿Por qué suscribirte?" benefits={BENEFITS} />);

    expect(screen.getByRole('region', { name: '¿Por qué suscribirte?' })).toHaveAttribute(
      'id',
      'beneficios'
    );
  });

  it('oculta los iconos decorativos a los lectores de pantalla', () => {
    const { container } = renderWithTheme(
      <FeaturedSection title="Beneficios" benefits={BENEFITS} />
    );

    container.querySelectorAll('svg').forEach((svg) => {
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('renderiza una lista vacía cuando no hay beneficios', () => {
    renderWithTheme(<FeaturedSection title="Sin beneficios" benefits={[]} />);

    expect(screen.getByRole('list').children).toHaveLength(0);
  });
});
