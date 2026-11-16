import { act, renderHook } from '@testing-library/react';
import { ChangeEvent, FormEvent } from 'react';
import useSubscriptionForm from '../hooks/useSubscriptionForm';

// Simula un evento de cambio de un <input>, que es lo que handleChange espera.
function makeChangeEvent(
  name: string,
  value: string
): ChangeEvent<HTMLInputElement> {
  return {
    target: { name, value },
  } as unknown as ChangeEvent<HTMLInputElement>;
}

function makeSubmitEvent(): FormEvent<HTMLFormElement> {
  return { preventDefault: jest.fn() } as unknown as FormEvent<HTMLFormElement>;
}

describe('useSubscriptionForm', () => {
  it('inicia con datos, errores vacíos y estado "idle"', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    expect(result.current.formData).toEqual({
      name: '',
      email: '',
      topics: [],
      frequency: 'semanal',
    });
    expect(result.current.errors).toEqual({ name: '', email: '' });
    expect(result.current.messageStatus).toBe('idle');
    expect(result.current.failedSubmits).toBe(0);
  });

  it('actualiza el valor y el error de nombre al escribir', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    act(() => {
      result.current.handleChange(makeChangeEvent('name', ''));
    });

    expect(result.current.formData.name).toBe('');
    expect(result.current.errors.name).toBe('El nombre no puede estar vacío.');

    act(() => {
      result.current.handleChange(makeChangeEvent('name', 'Ana'));
    });

    expect(result.current.formData.name).toBe('Ana');
    expect(result.current.errors.name).toBe('');
  });

  it('actualiza el valor y el error de correo al escribir', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    act(() => {
      result.current.handleChange(makeChangeEvent('email', 'no-valido'));
    });

    expect(result.current.errors.email).toBe(
      'Ingresa un correo electrónico válido.'
    );

    act(() => {
      result.current.handleChange(makeChangeEvent('email', 'ana@correo.com'));
    });

    expect(result.current.formData.email).toBe('ana@correo.com');
    expect(result.current.errors.email).toBe('');
  });

  it('marca estado "error" y llena los errores al enviar con campos inválidos', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    act(() => {
      result.current.handleSubmit(makeSubmitEvent());
    });

    expect(result.current.messageStatus).toBe('error');
    expect(result.current.errors.name).toBe('El nombre no puede estar vacío.');
    expect(result.current.errors.email).toBe(
      'Ingresa un correo electrónico válido.'
    );
  });

  it('marca estado "success" y limpia el formulario al enviar con datos válidos', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    act(() => {
      result.current.handleChange(makeChangeEvent('name', 'Ana'));
      result.current.handleChange(makeChangeEvent('email', 'ana@correo.com'));
    });

    act(() => {
      result.current.handleSubmit(makeSubmitEvent());
    });

    expect(result.current.messageStatus).toBe('success');
    expect(result.current.errors).toEqual({ name: '', email: '' });
    expect(result.current.formData).toEqual({
      name: '',
      email: '',
      topics: [],
      frequency: 'semanal',
    });
  });

  it('cuenta los envíos fallidos para devolver el foco al campo inválido', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    act(() => {
      result.current.handleSubmit(makeSubmitEvent());
    });
    act(() => {
      result.current.handleSubmit(makeSubmitEvent());
    });

    expect(result.current.failedSubmits).toBe(2);
  });

  it('agrega y quita temas con handleTopicToggle', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    act(() => {
      result.current.handleTopicToggle('moda');
      result.current.handleTopicToggle('noticias');
    });
    expect(result.current.formData.topics).toEqual(['moda', 'noticias']);

    act(() => {
      result.current.handleTopicToggle('moda');
    });
    expect(result.current.formData.topics).toEqual(['noticias']);
  });

  it('cambia la frecuencia con handleFrequencyChange', () => {
    const { result } = renderHook(() => useSubscriptionForm());

    act(() => {
      result.current.handleFrequencyChange('mensual');
    });

    expect(result.current.formData.frequency).toBe('mensual');
  });
});
