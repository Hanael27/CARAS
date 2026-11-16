import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import Footer from '../components/Footer/Footer';
import { SocialLink } from '../components/Footer/Footer.types';

const SOCIAL_LINKS: SocialLink[] = [
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/caras' },
  { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/caras' },
];

const renderFooter = () =>
  renderWithTheme(<Footer socialLinks={SOCIAL_LINKS} contactEmail="contacto@caras.mx" />);

describe('Footer', () => {
  it('es el pie de página (contentinfo) de la página', () => {
    renderFooter();

    expect(screen.getByRole('contentinfo')).toHaveAttribute('id', 'contacto');
  });

  it('renderiza un enlace por cada red social dentro de una navegación con nombre', () => {
    renderFooter();

    expect(
      screen.getByRole('navigation', { name: 'Redes sociales de CARAS' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Instagram/ })).toHaveAttribute(
      'href',
      'https://instagram.com/caras'
    );
    expect(screen.getByRole('link', { name: /^Facebook/ })).toHaveAttribute(
      'href',
      'https://facebook.com/caras'
    );
  });

  it('avisa que los enlaces externos se abren en una pestaña nueva', () => {
    renderFooter();

    const link = screen.getByRole('link', { name: /^Instagram/ });
    expect(link).toHaveAccessibleName('Instagram (se abre en una pestaña nueva)');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renderiza el correo de contacto como enlace mailto', () => {
    renderFooter();

    expect(
      screen.getByRole('link', { name: 'Escribir un correo a contacto@caras.mx' })
    ).toHaveAttribute('href', 'mailto:contacto@caras.mx');
  });

  it('renderiza el texto de copyright', () => {
    renderFooter();

    expect(screen.getByText('© CARAS México')).toBeInTheDocument();
  });

  it('marca con lang="en" los nombres de las tecnologías', () => {
    const { container } = renderFooter();

    expect(container.querySelectorAll('[lang="en"]')).toHaveLength(2);
  });
});
