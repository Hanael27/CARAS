import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

describe('ThemeToggle', () => {
  it('renderiza el checkbox sin marcar cuando isDark es false', () => {
    renderWithTheme(<ThemeToggle isDark={false} onToggle={jest.fn()} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('renderiza el checkbox marcado cuando isDark es true', () => {
    renderWithTheme(<ThemeToggle isDark={true} onToggle={jest.fn()} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('llama a onToggle cuando se hace clic en el checkbox', () => {
    const onToggle = jest.fn();
    renderWithTheme(<ThemeToggle isDark={false} onToggle={onToggle} />);

    fireEvent.click(screen.getByRole('checkbox'));

    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
