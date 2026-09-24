import { validateName, validateEmail } from '../utils/validation';

describe('validateName', () => {
  it('devuelve un mensaje de error cuando el nombre está vacío', () => {
    expect(validateName('')).toBe('El nombre no puede estar vacío.');
  });

  it('devuelve un mensaje de error cuando el nombre solo tiene espacios', () => {
    expect(validateName('   ')).toBe('El nombre no puede estar vacío.');
  });

  it('no devuelve error cuando el nombre es válido', () => {
    expect(validateName('Daniela Martínez')).toBe('');
  });
});

describe('validateEmail', () => {
  it('devuelve un mensaje de error cuando el correo está vacío', () => {
    expect(validateEmail('')).toBe('Ingresa un correo electrónico válido.');
  });

  it('devuelve un mensaje de error cuando el correo no tiene un formato válido', () => {
    expect(validateEmail('correo-invalido')).toBe(
      'Ingresa un correo electrónico válido.'
    );
    expect(validateEmail('correo@sin-dominio')).toBe(
      'Ingresa un correo electrónico válido.'
    );
    expect(validateEmail('@sindomain.com')).toBe(
      'Ingresa un correo electrónico válido.'
    );
  });

  it('no devuelve error cuando el correo es válido', () => {
    expect(validateEmail('ejemplo@correo.com')).toBe('');
  });

  it('ignora espacios al inicio y al final antes de validar', () => {
    expect(validateEmail('  ejemplo@correo.com  ')).toBe('');
  });
});
