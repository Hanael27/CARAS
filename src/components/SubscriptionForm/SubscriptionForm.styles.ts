import styled from 'styled-components';

export const SubscribeWrapper = styled.section`
  margin-top: 5rem;
  background: ${(props) => props.theme.colors.card};
  padding: 2.5rem 1.875rem;
  border-radius: 1rem;
  text-align: center;
`;

export const SubscribeTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

export const SubscribeIntro = styled.p`
  font-family: ${(props) => props.theme.fonts.ui};
  color: ${(props) => props.theme.colors.muted};
`;

// Lista numerada: muestra el proceso en 3 pasos y los lectores anuncian "elemento 1 de 3".
export const Steps = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 1.5rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
  counter-reset: step;
  font-family: ${(props) => props.theme.fonts.ui};
  font-weight: 700;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    counter-increment: step;
  }

  li::before {
    content: counter(step);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.onPrimary};
    border-radius: 50%;
    font-size: 0.875rem;
  }
`;

export const Form = styled.form`
  max-width: 28rem;
  margin: 2rem auto 0;
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
  font-weight: 700;
  margin-bottom: 0.375rem;
`;

// El borde cambia según $hasError / $isValid. El estado de error NO depende solo del color:
// también hay un mensaje de texto y aria-invalid.
export const FormInput = styled.input<{ $hasError: boolean; $isValid: boolean }>`
  padding: 0.875rem;
  border-radius: 0.625rem;
  border: 2px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.inputBg};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 1rem;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${(props) => props.theme.colors.muted};
    opacity: 1;
  }

  ${(props) => props.$isValid && `border-color: ${props.theme.colors.success};`}
  ${(props) => props.$hasError && `border-color: ${props.theme.colors.danger};`}
`;

// Solo existe en el DOM cuando hay un error; el input lo enlaza con aria-describedby.
export const FormError = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.9375rem;
  font-weight: 700;
  margin-top: 0.375rem;
`;

export const FormFieldset = styled.fieldset`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.625rem;
  padding: 1rem;
  text-align: left;
`;

export const FormLegend = styled.legend`
  font-family: ${(props) => props.theme.fonts.ui};
  font-weight: 700;
  padding: 0 0.5rem;
`;

// Columnas iguales: las opciones quedan alineadas en lugar de partirse al azar entre filas.
export const OptionsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9.5rem, 1fr));
  gap: 0.25rem 1rem;
`;

export const OptionLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  font-family: ${(props) => props.theme.fonts.ui};
  cursor: pointer;

  input {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: ${(props) => props.theme.colors.primary};
  }
`;

// El color y fondo del mensaje global cambian según el status ('success' | 'error' | 'idle').
// En "idle" no ocupa espacio pero sigue en el DOM para que sea una región viva fiable.
export const FormMessage = styled.p<{ $status: 'idle' | 'success' | 'error' }>`
  font-family: ${(props) => props.theme.fonts.ui};
  font-weight: 700;
  text-align: center;
  border-radius: 0.625rem;

  ${(props) =>
    props.$status === 'success' &&
    `
      padding: 0.75rem 1rem;
      color: ${props.theme.colors.successText};
      background: ${props.theme.colors.successBg};
      border: 2px solid ${props.theme.colors.success};
    `}

  ${(props) =>
    props.$status === 'error' &&
    `
      padding: 0.75rem 1rem;
      color: ${props.theme.colors.dangerText};
      background: ${props.theme.colors.dangerBg};
      border: 2px solid ${props.theme.colors.danger};
    `}
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 3rem;
  padding: 0.875rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;
