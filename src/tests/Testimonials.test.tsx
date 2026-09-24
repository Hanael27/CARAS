import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import Testimonials from '../components/Testimonials/Testimonials';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'daniela',
    photo: '/img/Daniela.png',
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
  it('renderiza el título de la sección', () => {
    renderWithTheme(<Testimonials testimonials={TESTIMONIALS} />);

    expect(
      screen.getByText('Lo que dicen nuestros lectores')
    ).toBeInTheDocument();
  });

  it('renderiza una tarjeta por cada testimonio con su cita y autor', () => {
    renderWithTheme(<Testimonials testimonials={TESTIMONIALS} />);

    TESTIMONIALS.forEach((testimonial) => {
      expect(
        screen.getByText(`"${testimonial.quote}"`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`— ${testimonial.author}`)
      ).toBeInTheDocument();
      expect(
        screen.getByAltText(`Foto de ${testimonial.author}`)
      ).toHaveAttribute('src', testimonial.photo);
    });
  });
});
