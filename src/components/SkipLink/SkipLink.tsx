import React from 'react';
import styled from 'styled-components';

// Primer elemento enfocable de la página: solo se ve al navegar con teclado y
// permite saltar directo al contenido sin recorrer todo el menú.
const SkipLinkAnchor = styled.a`
  position: absolute;
  top: -100px;
  left: 1rem;
  z-index: 1000;
  padding: 0.75rem 1.25rem;
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.ui};
  font-weight: 700;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 0.5rem;

  &:focus {
    top: 1rem;
  }
`;

function SkipLink() {
  return <SkipLinkAnchor href="#contenido-principal">Saltar al contenido principal</SkipLinkAnchor>;
}

export default SkipLink;
