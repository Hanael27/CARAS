import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import Header from '../components/Header/Header';

describe('Header', () => {
  it('renderiza el título y el subtítulo', () => {
    renderWithTheme(<Header isDark={false} onToggleTheme={jest.fn()} />);

    expect(screen.getByText('CARAS')).toBeInTheDocument();
    expect(
      screen.getByText('Lo mejor del entretenimiento, moda y lifestyle')
    ).toBeInTheDocument();
  });

  it('renderiza los dos logotipos con el alt correcto', () => {
    renderWithTheme(<Header isDark={false} onToggleTheme={jest.fn()} />);

    const logos = screen.getAllByAltText('CARAS');
    expect(logos).toHaveLength(2);
  });

  it('muestra el logo claro cuando isDark es false', () => {
    renderWithTheme(<Header isDark={false} onToggleTheme={jest.fn()} />);

    const logos = screen.getAllByAltText('CARAS') as HTMLImageElement[];
    expect(logos[0]).toHaveAttribute('src', '/img/Logo2.png');
    expect(logos[0]).toBeVisible();
    expect(logos[1]).not.toBeVisible();
  });

  it('muestra el logo oscuro cuando isDark es true', () => {
    renderWithTheme(<Header isDark={true} onToggleTheme={jest.fn()} />);

    const logos = screen.getAllByAltText('CARAS') as HTMLImageElement[];
    expect(logos[0]).not.toBeVisible();
    expect(logos[1]).toBeVisible();
  });

  it('renderiza el control para cambiar de tema', () => {
    renderWithTheme(<Header isDark={false} onToggleTheme={jest.fn()} />);

    expect(
      screen.getByLabelText('Cambiar tema claro u oscuro')
    ).toBeInTheDocument();
  });
});
