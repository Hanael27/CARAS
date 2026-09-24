// Funciones de validación separadas de los componentes/hooks para poder
// probarlas de forma aislada con Jest.

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateName = (value: string): string =>
  value.trim() === '' ? 'El nombre no puede estar vacío.' : '';

export const validateEmail = (value: string): string =>
  EMAIL_REGEX.test(value.trim()) ? '' : 'Ingresa un correo electrónico válido.';
