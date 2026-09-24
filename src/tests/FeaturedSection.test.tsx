import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';

describe('FeaturedSection', () => {
  const BENEFITS = ['Noticias exclusivas', 'Tendencias en moda'];

  it('renderiza el título, la imagen y la lista de beneficios', () => {
    renderWithTheme(
      <FeaturedSection
        imageSrc="/img/Logo-Caras.png"
        imageAlt="Imagen principal de la revista CARAS"
        title="¿Por qué suscribirte?"
        benefits={BENEFITS}
      />
    );

    expect(screen.getByText('¿Por qué suscribirte?')).toBeInTheDocument();
    expect(
      screen.getByAltText('Imagen principal de la revista CARAS')
    ).toHaveAttribute('src', '/img/Logo-Caras.png');

    BENEFITS.forEach((benefit) => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  it('renderiza una lista vacía cuando no hay beneficios', () => {
    renderWithTheme(
      <FeaturedSection
        imageSrc="/img/Logo-Caras.png"
        imageAlt="Imagen principal"
        title="Sin beneficios"
        benefits={[]}
      />
    );

    expect(screen.getByRole('list').children).toHaveLength(0);
  });
});
