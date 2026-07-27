import { useState, useCallback } from 'react';
import { AppTheme, ThemeMode } from '../types';
import { lightTheme, darkTheme } from '../styles/theme';

interface UseThemeToggleResult {
  theme: AppTheme;
  mode: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
}

// Maneja el estado del tema (claro/oscuro) que antes se controlaba
// manipulando el atributo data-theme directamente en el DOM.
function useThemeToggle(initialMode: ThemeMode = 'light'): UseThemeToggleResult {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return { theme, mode, isDark: mode === 'dark', toggleTheme };
}

export default useThemeToggle;
