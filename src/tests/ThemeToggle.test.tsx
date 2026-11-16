import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

describe('ThemeToggle', () => {
  it('es un interruptor (role="switch") con nombre accesible', () => {
    renderWithTheme(<ThemeToggle isDark={false} onToggle={jest.fn()} />);

    expect(screen.getByRole('switch', { name: 'Modo oscuro' })).toBeInTheDocument();
  });

  it('indica con aria-checked="false" cuando isDark es false', () => {
    renderWithTheme(<ThemeToggle isDark={false} onToggle={jest.fn()} />);

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('indica con aria-checked="true" cuando isDark es true', () => {
    renderWithTheme(<ThemeToggle isDark={true} onToggle={jest.fn()} />);

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('llama a onToggle cuando se hace clic', () => {
    const onToggle = jest.fn();
    renderWithTheme(<ThemeToggle isDark={false} onToggle={onToggle} />);

    fireEvent.click(screen.getByRole('switch'));

    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
