import React, { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';

// Muchos componentes usan styled-components con acceso a props.theme,
// así que los envolvemos en un ThemeProvider real para las pruebas.
export function renderWithTheme(ui: ReactElement): RenderResult {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);
}

export * from '@testing-library/react';
