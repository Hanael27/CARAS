import { useState, useCallback, useEffect } from 'react';
import { AppTheme, ThemeMode } from '../types';
import { lightTheme, darkTheme } from '../styles/theme';

interface UseThemeToggleResult {
  theme: AppTheme;
  mode: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
}

// Si el sistema operativo de la persona está en modo oscuro, se empieza en oscuro.
// matchMedia puede no existir (por ejemplo en las pruebas con jsdom): en ese caso, claro.
function getPreferredMode(): ThemeMode {
  const prefersDark =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

// Maneja el estado del tema (claro/oscuro).
function useThemeToggle(initialMode?: ThemeMode): UseThemeToggleResult {
  const [mode, setMode] = useState<ThemeMode>(() => initialMode ?? getPreferredMode());

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  // Avisa al navegador del esquema de color para que sus controles nativos
  // (barras de desplazamiento, campos, etc.) coincidan con el tema.
  useEffect(() => {
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return { theme, mode, isDark: mode === 'dark', toggleTheme };
}

export default useThemeToggle;
