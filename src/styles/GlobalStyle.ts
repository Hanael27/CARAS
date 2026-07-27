import { createGlobalStyle } from 'styled-components';

// Replica el reset y los estilos globales de style.css / style.scss,
// usando el theme (light/dark) inyectado por el ThemeProvider en lugar del atributo data-theme.
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.title};
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
    transition: background 0.3s, color 0.3s;
  }

  main {
    max-width: 1200px;
    margin: auto;
    padding: 1.25rem;
  }
`;

export default GlobalStyle;
