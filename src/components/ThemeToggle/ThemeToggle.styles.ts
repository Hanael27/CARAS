import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.onHeader};
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.9375rem;
  cursor: pointer;
  padding: 0.25rem;
`;

export const ToggleTrack = styled.span`
  position: relative;
  display: inline-block;
  width: 3.125rem;
  height: 1.75rem;
  border: 2px solid currentColor;
  border-radius: 1.75rem;
`;

export const ToggleThumb = styled.span<{ $on: boolean }>`
  position: absolute;
  top: 50%;
  left: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.625rem;
  background: ${(props) => props.theme.colors.onHeader};
  color: ${(props) => props.theme.colors.headerBg};
  border-radius: 50%;
  transition: transform 0.3s;
  transform: translateX(${(props) => (props.$on ? '1.375rem' : '0')});
`;

// Visible desde tablet; antes solo lo lee el lector de pantalla (técnica sr-only).
export const ToggleText = styled.span`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }
`;
