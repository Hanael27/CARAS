import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import Footer from '../components/Footer/Footer';
import { SocialLink } from '../components/Footer/Footer.types';

const SOCIAL_LINKS: SocialLink[] = [
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/caras' },
  { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/caras' },
];

describe('Footer', () => {
  it('renderiza un enlace por cada red social recibida', () => {
    renderWithTheme(
      <Footer socialLinks={SOCIAL_LINKS} contactEmail="contacto@caras.mx" />
    );

    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com/caras'
    );
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com/caras'
    );
  });

  it('renderiza el correo de contacto como enlace mailto', () => {
    renderWithTheme(
      <Footer socialLinks={SOCIAL_LINKS} contactEmail="contacto@caras.mx" />
    );

    expect(
      screen.getByRole('link', { name: 'contacto@caras.mx' })
    ).toHaveAttribute('href', 'mailto:contacto@caras.mx');
  });

  it('renderiza el texto de copyright', () => {
    renderWithTheme(
      <Footer socialLinks={SOCIAL_LINKS} contactEmail="contacto@caras.mx" />
    );

    expect(screen.getByText('© CARAS México')).toBeInTheDocument();
  });
});
