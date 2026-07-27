import styled from 'styled-components';

export const SubscribeWrapper = styled.section`
  text-align: center;
  margin-top: 2.5rem;
  background: ${(props) => props.theme.colors.card};
  padding: 1.875rem;
  border-radius: 1rem;
`;

export const SubscribeTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Form = styled.form`
  max-width: 26.25rem;
  margin: 1.875rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FormLabel = styled.label`
  font-family: ${(props) => props.theme.fonts.ui};
  margin-bottom: 0.375rem;
`;

// El borde y el fondo cambian según las props $hasError / $isValid,
// igual que antes con las clases form__input--error / form__input--success.
export const FormInput = styled.input<{ $hasError: boolean; $isValid: boolean }>`
  padding: 0.875rem;
  border-radius: 0.625rem;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.9375rem;
  transition: border-color 0.2s, background 0.2s;

  ${(props) =>
    props.$hasError &&
    `
      border: 2px solid #c0392b;
      background: #fff5f5;
    `}

  ${(props) =>
    props.$isValid &&
    `
      border: 2px solid #27ae60;
      background: #f0fff4;
    `}
`;

// Solo se muestra (display: block) cuando hay un mensaje de error, vía la prop $visible.
export const FormError = styled.span<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'block' : 'none')};
  color: #c0392b;
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.8125rem;
  font-weight: 700;
  margin-top: 0.25rem;
`;

// El color y fondo del mensaje global cambian según el status ('success' | 'error' | 'idle').
export const FormMessage = styled.p<{ $status: 'idle' | 'success' | 'error' }>`
  display: ${(props) => (props.$status === 'idle' ? 'none' : 'block')};
  font-family: ${(props) => props.theme.fonts.ui};
  font-weight: 700;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  text-align: center;

  ${(props) =>
    props.$status === 'success' &&
    `
      color: #155724;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      font-size: 1.0625rem;
    `}

  ${(props) =>
    props.$status === 'error' &&
    `
      color: #721c24;
      background: #f8d7da;
      border: 1px solid #f5c6cb;
    `}
`;

export const SubmitButton = styled.button`
  padding: 0.875rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme.colors.accent};
  color: #fff;
  font-family: ${(props) => props.theme.fonts.ui};
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 0.625rem;

  &:hover {
    opacity: 0.85;
  }
`;
