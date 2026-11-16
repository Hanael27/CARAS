import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${(props) => props.theme.colors.headerBg};
  color: ${(props) => props.theme.colors.onHeader};
  padding: 0.75rem 1.5rem;
  transition: background 0.3s;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 2rem;
  max-width: 1200px;
  margin: auto;
`;

export const BrandLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: inherit;
`;

export const HeaderLogo = styled.img`
  height: 2.5rem;
  width: auto;
  display: block;
`;

// Tema + botón de menú, siempre pegados a la derecha
export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
  order: 3;
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  background: none;
  border: 2px solid currentColor;
  border-radius: 0.5rem;
  color: inherit;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: inline-flex;
  }
`;

// En escritorio es una barra horizontal; en móvil es un panel que se despliega.
export const MainNav = styled.nav<{ $open: boolean }>`
  order: 2;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    order: 4;
    flex-basis: 100%;
    display: ${(props) => (props.$open ? 'block' : 'none')};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 0.25rem 1.5rem;
  list-style: none;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const NavAnchor = styled.a`
  display: block;
  padding: 0.5rem 0.25rem;
  color: inherit;
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom-color: currentColor;
  }

  /* La sección actual se marca con subrayado y negrita, no solo con color. */
  &[aria-current='location'] {
    font-weight: 700;
    border-bottom-color: currentColor;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0.75rem 0.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    &[aria-current='location'] {
      border-bottom-width: 3px;
    }
  }
`;
