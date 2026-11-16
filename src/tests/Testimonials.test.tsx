import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import Testimonials from '../components/Testimonials/Testimonials';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'daniela',
    photo: '/img/Daniela.png',
    photoAlt: 'Retrato de Daniela, mujer de cabello castaño',
    quote: 'CARAS siempre me mantiene informada.',
    author: 'Daniela M.',
  },
  {
    id: 'luis',
    photo: '/img/Luis.png',
    quote: 'Mi newsletter favorito.',
    author: 'Luis R.',
  },
];

describe('Testimonials', () => {
  it('renderiza el título de la sección como encabezado', () => {
    renderWithTheme(<Testimonials testimonials={TESTIMONIALS} />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Lo que dicen nuestros lectores' })
    ).toBeInTheDocument();
  });

  it('renderiza una tarjeta por cada testimonio dentro de una lista', () => {
    renderWithTheme(<Testimonials testimonials={TESTIMONIALS} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(TESTIMONIALS.length);
    expect(screen.getAllByRole('figure')).toHaveLength(TESTIMONIALS.length);
  });

  it('muestra la cita y el autor de cada testimonio', () => {
    renderWithTheme(<Testimonials testimonials={TESTIMONIALS} />);

    expect(
      screen.getByText('"CARAS siempre me mantiene informada."')
    ).toBeInTheDocument();
    expect(screen.getByText('— Daniela M.')).toBeInTheDocument();
    expect(screen.getByText('— Luis R.')).toBeInTheDocument();
  });

  it('usa photoAlt como texto alternativo y, si falta, "Foto de {autor}"', () => {
    renderWithTheme(<Testimonials testimonials={TESTIMONIALS} />);

    expect(
      screen.getByAltText('Retrato de Daniela, mujer de cabello castaño')
    ).toHaveAttribute('src', '/img/Daniela.png');
    expect(screen.getByAltText('Foto de Luis R.')).toHaveAttribute('src', '/img/Luis.png');
  });

  it('marca con lang="en" las palabras en inglés de la cita', () => {
    const { container } = renderWithTheme(<Testimonials testimonials={TESTIMONIALS} />);

    expect(container.querySelector('[lang="en"]')).toHaveTextContent('newsletter');
  });
});
