import { act, renderHook } from '@testing-library/react';
import useThemeToggle from '../hooks/useThemeToggle';
import { lightTheme, darkTheme } from '../styles/theme';

describe('useThemeToggle', () => {
  it('inicia en modo claro por defecto', () => {
    const { result } = renderHook(() => useThemeToggle());

    expect(result.current.mode).toBe('light');
    expect(result.current.isDark).toBe(false);
    expect(result.current.theme).toEqual(lightTheme);
  });

  it('permite iniciar en modo oscuro', () => {
    const { result } = renderHook(() => useThemeToggle('dark'));

    expect(result.current.mode).toBe('dark');
    expect(result.current.isDark).toBe(true);
    expect(result.current.theme).toEqual(darkTheme);
  });

  it('alterna entre modo claro y oscuro al llamar toggleTheme', () => {
    const { result } = renderHook(() => useThemeToggle());

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.mode).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.mode).toBe('light');
  });
});
