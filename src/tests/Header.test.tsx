import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import Header from '../components/Header/Header';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'suscripcion', label: 'Suscripción' },
];

const renderHeader = (isDark = false, activeId = 'inicio') =>
  renderWithTheme(
    <Header isDark={isDark} onToggleTheme={jest.fn()} navItems={NAV_ITEMS} activeId={activeId} />
  );

describe('Header', () => {
  it('renderiza el logo dentro de un enlace que lleva al inicio', () => {
    renderHeader();

    const brand = screen.getByRole('link', { name: /CARAS.*ir al inicio/i });
    expect(brand).toHaveAttribute('href', '#inicio');
    expect(screen.getByAltText('CARAS')).toBeInTheDocument();
  });

  it('muestra el logo claro cuando isDark es false', () => {
    renderHeader(false);

    expect(screen.getByAltText('CARAS')).toHaveAttribute('src', '/img/Logo2.png');
  });

  it('muestra el logo rojo cuando isDark es true', () => {
    renderHeader(true);

    expect(screen.getByAltText('CARAS')).toHaveAttribute('src', '/img/Logo1.png');
  });

  it('renderiza la navegación principal con un enlace por sección', () => {
    renderHeader();

    const nav = screen.getByRole('navigation', { name: 'Navegación principal' });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Beneficios' })).toHaveAttribute(
      'href',
      '#beneficios'
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(NAV_ITEMS.length);
  });

  it('marca con aria-current solo la sección activa', () => {
    renderHeader(false, 'beneficios');

    expect(screen.getByRole('link', { name: 'Beneficios' })).toHaveAttribute(
      'aria-current',
      'location'
    );
    expect(screen.getByRole('link', { name: 'Inicio' })).not.toHaveAttribute('aria-current');
  });

  it('renderiza el interruptor de modo oscuro', () => {
    renderHeader();

    expect(screen.getByRole('switch', { name: 'Modo oscuro' })).toBeInTheDocument();
  });

  // El botón de menú solo se muestra en pantallas angostas (media query) y jsdom no
  // evalúa media queries: lo ve con display:none y por eso no calcula su nombre accesible.
  // Se consulta con { hidden: true } y el aria-label se verifica como atributo.
  const getMenuButton = () => screen.getByRole('button', { hidden: true });

  it('el botón de menú abre y cierra la navegación y actualiza aria-expanded', () => {
    renderHeader();

    expect(getMenuButton()).toHaveAttribute('aria-label', 'Abrir menú de navegación');
    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'false');
    expect(getMenuButton()).toHaveAttribute('aria-controls', 'menu-principal');

    fireEvent.click(getMenuButton());
    expect(getMenuButton()).toHaveAttribute('aria-label', 'Cerrar menú de navegación');
    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(getMenuButton());
    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'false');
  });

  it('la tecla Escape cierra el menú y devuelve el foco al botón', () => {
    renderHeader();

    fireEvent.click(getMenuButton());
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'false');
    expect(getMenuButton()).toHaveFocus();
  });
});
