import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import useScrolledPast from '../../hooks/useScrolledPast';

const BackToTopButton = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 90;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  border: 2px solid ${(props) => props.theme.colors.onPrimary};
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;

// Aparece al bajar. Al activarlo sube y deja el foco en la primera sección,
// para que quien navega con teclado no se quede "abajo" en el orden de tabulación.
function BackToTop() {
  const isVisible = useScrolledPast(600);

  if (!isVisible) return null;

  const handleClick = () => {
    window.scrollTo({ top: 0 });
    document.getElementById('inicio')?.focus({ preventScroll: true });
  };

  return (
    <BackToTopButton type="button" aria-label="Volver al inicio de la página" onClick={handleClick}>
      <Icon name="arrowUp" size={22} />
    </BackToTopButton>
  );
}

export default BackToTop;
