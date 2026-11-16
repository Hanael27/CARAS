import { createGlobalStyle } from 'styled-components';

// Reset y estilos globales. Usa el theme (claro/oscuro) inyectado por el ThemeProvider.
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* El encabezado es fijo: al saltar a una sección su título no queda tapado. */
    scroll-padding-top: 5.5rem;
    color-scheme: ${(props) => props.theme.mode};
  }

  /* Desplazamiento suave solo si la persona no pidió reducir el movimiento. */
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: ${(props) => props.theme.fonts.title};
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
    transition: background 0.3s, color 0.3s;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${(props) => props.theme.colors.link};
  }

  main {
    max-width: 1200px;
    margin: auto;
    padding: 1.25rem;
  }

  /* El <main> recibe el foco solo desde el enlace "Saltar al contenido". */
  main:focus {
    outline: none;
  }

  /* Foco de teclado visible en cualquier fondo: anillo de color + halo contrastante. */
  :focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.focus};
    outline-offset: 3px;
  }

  /* Texto solo para lectores de pantalla */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
