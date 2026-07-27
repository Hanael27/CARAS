import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3.125rem;
  height: 1.625rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1.625rem;
  cursor: pointer;
  transition: background 0.3s;

  &::before {
    content: '';
    position: absolute;
    left: 0.25rem;
    bottom: 0.25rem;
    width: 1.125rem;
    height: 1.125rem;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  input:checked + & {
    background: rgba(255, 255, 255, 0.7);
  }

  input:checked + &::before {
    transform: translateX(1.5rem);
  }
`;
