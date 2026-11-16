import { lightTheme, darkTheme } from '../styles/theme';
import { AppTheme } from '../types';

// Luminancia y relación de contraste según WCAG 2.1
function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(foreground: string, background: string): number {
  const [light, dark] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

const AA_TEXT = 4.5; // texto normal
const AA_UI = 3; // bordes de campos y componentes de interfaz

// [descripción, color del texto/elemento, color del fondo, mínimo]
const pairs = (t: AppTheme): [string, string, string, number][] => [
  ['texto sobre fondo', t.colors.text, t.colors.bg, AA_TEXT],
  ['texto sobre tarjeta', t.colors.text, t.colors.card, AA_TEXT],
  ['texto secundario sobre fondo', t.colors.muted, t.colors.bg, AA_TEXT],
  ['texto secundario sobre tarjeta', t.colors.muted, t.colors.card, AA_TEXT],
  ['texto del encabezado', t.colors.onHeader, t.colors.headerBg, AA_TEXT],
  ['texto de botón primario', t.colors.onPrimary, t.colors.primary, AA_TEXT],
  ['texto de botón primario (hover)', t.colors.onPrimary, t.colors.primaryHover, AA_TEXT],
  ['enlaces sobre fondo', t.colors.link, t.colors.bg, AA_TEXT],
  ['enlaces sobre tarjeta', t.colors.link, t.colors.card, AA_TEXT],
  ['texto del pie de página', t.colors.onFooter, t.colors.footerBg, AA_TEXT],
  ['texto de error sobre tarjeta', t.colors.danger, t.colors.card, AA_TEXT],
  ['texto de error sobre fondo', t.colors.danger, t.colors.bg, AA_TEXT],
  ['mensaje de error', t.colors.dangerText, t.colors.dangerBg, AA_TEXT],
  ['mensaje de éxito', t.colors.successText, t.colors.successBg, AA_TEXT],
  ['texto dentro de los campos', t.colors.text, t.colors.inputBg, AA_TEXT],
  ['marcador (placeholder) de los campos', t.colors.muted, t.colors.inputBg, AA_TEXT],
  ['borde de los campos sobre tarjeta', t.colors.border, t.colors.card, AA_UI],
  ['borde de los campos sobre fondo del campo', t.colors.border, t.colors.inputBg, AA_UI],
  ['anillo de foco sobre fondo', t.colors.focus, t.colors.bg, AA_UI],
  ['anillo de foco sobre tarjeta', t.colors.focus, t.colors.card, AA_UI],
];

describe.each([
  ['tema claro', lightTheme],
  ['tema oscuro', darkTheme],
])('Contraste WCAG AA - %s', (_name, theme) => {
  it.each(pairs(theme))('%s cumple el mínimo', (_label, foreground, background, minimum) => {
    expect(ratio(foreground, background)).toBeGreaterThanOrEqual(minimum);
  });
});
