import styled from 'styled-components';

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-top: 2rem;

  &:focus {
    outline: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.15;
`;

export const HeroLead = styled.p`
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 1.1875rem;
  color: ${(props) => props.theme.colors.muted};
  max-width: 34rem;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 0.625rem;
  font-weight: 700;
  text-decoration: none;
  min-height: 3rem;
`;

export const PrimaryLink = styled.a`
  ${buttonBase}
  font-family: ${(props) => props.theme.fonts.ui};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
    border-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const SecondaryLink = styled.a`
  ${buttonBase}
  font-family: ${(props) => props.theme.fonts.ui};
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: 2px solid ${(props) => props.theme.colors.text};

  &:hover {
    background: ${(props) => props.theme.colors.card};
  }
`;

// Logo-Caras.png es una hoja con tres versiones del logo, una sobre otra.
// Se recorta al panel rojo de arriba (primer tercio de la imagen).
export const HeroImage = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  aspect-ratio: 1845 / 965;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
