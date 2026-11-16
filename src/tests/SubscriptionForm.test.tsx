import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm';

describe('SubscriptionForm - renderizado', () => {
  it('renderiza los campos de nombre y correo, y el botón de envío', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(screen.getByLabelText('Nombre completo')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Suscribirme' })).toBeInTheDocument();
  });

  it('cada campo está enlazado con su label mediante for/id', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(screen.getByLabelText('Nombre completo')).toHaveAttribute('id', 'name');
    expect(screen.getByLabelText('Correo electrónico')).toHaveAttribute('id', 'email');
    expect(screen.getByLabelText('Correo electrónico')).toHaveAttribute('type', 'email');
  });

  it('indica el tipo de dato esperado con autocomplete y required', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(screen.getByLabelText('Nombre completo')).toHaveAttribute('autocomplete', 'name');
    expect(screen.getByLabelText('Nombre completo')).toBeRequired();
    expect(screen.getByLabelText('Correo electrónico')).toHaveAttribute('autocomplete', 'email');
    expect(screen.getByLabelText('Correo electrónico')).toBeRequired();
  });

  it('el formulario tiene nombre accesible', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(screen.getByRole('form', { name: 'Formulario de suscripción' })).toBeInTheDocument();
  });

  it('no muestra errores ni alertas al inicio', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Nombre completo')).toHaveAttribute('aria-invalid', 'false');
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });
});

describe('SubscriptionForm - grupos de opciones', () => {
  it('agrupa los temas en un fieldset con legend y con casillas etiquetadas', () => {
    renderWithTheme(<SubscriptionForm />);

    const group = screen.getByRole('group', { name: /temas que te interesan/i });
    expect(group).toBeInTheDocument();
    expect(screen.getByLabelText('Moda')).toHaveAttribute('type', 'checkbox');
    expect(screen.getByLabelText('Lifestyle')).toBeInTheDocument();
  });

  it('marca "Lifestyle" con lang="en"', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(screen.getByText('Lifestyle')).toHaveAttribute('lang', 'en');
  });

  it('permite marcar y desmarcar temas', () => {
    renderWithTheme(<SubscriptionForm />);

    const moda = screen.getByLabelText('Moda') as HTMLInputElement;
    fireEvent.click(moda);
    expect(moda.checked).toBe(true);
    fireEvent.click(moda);
    expect(moda.checked).toBe(false);
  });

  it('agrupa las frecuencias en radios con "Semanal" seleccionado por defecto', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(
      screen.getByRole('group', { name: /con qué frecuencia quieres recibirnos/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Semanal')).toBeChecked();

    fireEvent.click(screen.getByLabelText('Mensual'));
    expect(screen.getByLabelText('Mensual')).toBeChecked();
    expect(screen.getByLabelText('Semanal')).not.toBeChecked();
  });
});

describe('SubscriptionForm - validación', () => {
  it('muestra un error cuando el campo de nombre se deja vacío', () => {
    renderWithTheme(<SubscriptionForm />);

    const nameInput = screen.getByLabelText('Nombre completo');
    fireEvent.change(nameInput, { target: { value: 'Ana' } });
    fireEvent.change(nameInput, { target: { value: '' } });

    expect(screen.getByText('El nombre no puede estar vacío.')).toBeInTheDocument();
  });

  it('muestra un error cuando el correo no tiene un formato válido', () => {
    renderWithTheme(<SubscriptionForm />);

    fireEvent.change(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'correo-invalido' },
    });

    expect(screen.getByText('Ingresa un correo electrónico válido.')).toBeInTheDocument();
  });

  it('enlaza cada error con su campo (aria-invalid y aria-describedby)', () => {
    renderWithTheme(<SubscriptionForm />);

    const emailInput = screen.getByLabelText('Correo electrónico');
    fireEvent.change(emailInput, { target: { value: 'correo-invalido' } });

    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    expect(emailInput).toHaveAccessibleDescription('Ingresa un correo electrónico válido.');
  });

  it('muestra ambos errores y el mensaje general al enviar el formulario vacío', async () => {
    renderWithTheme(<SubscriptionForm />);

    fireEvent.click(screen.getByRole('button', { name: 'Suscribirme' }));

    expect(await screen.findByText('El nombre no puede estar vacío.')).toBeInTheDocument();
    expect(screen.getByText('Ingresa un correo electrónico válido.')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(
      'Por favor corrige los errores antes de continuar.'
    );
  });

  it('al enviar con errores el foco pasa al primer campo inválido', async () => {
    renderWithTheme(<SubscriptionForm />);

    fireEvent.click(screen.getByRole('button', { name: 'Suscribirme' }));

    await waitFor(() => expect(screen.getByLabelText('Nombre completo')).toHaveFocus());
  });

  it('si solo el correo es inválido, el foco pasa al correo', async () => {
    renderWithTheme(<SubscriptionForm />);

    fireEvent.change(screen.getByLabelText('Nombre completo'), { target: { value: 'Ana' } });
    fireEvent.click(screen.getByRole('button', { name: 'Suscribirme' }));

    await waitFor(() => expect(screen.getByLabelText('Correo electrónico')).toHaveFocus());
  });

  it('muestra el mensaje de éxito cuando los datos son válidos', async () => {
    renderWithTheme(<SubscriptionForm />);

    fireEvent.change(screen.getByLabelText('Nombre completo'), {
      target: { value: 'Ana López' },
    });
    fireEvent.change(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'ana@correo.com' },
    });
    fireEvent.click(screen.getByLabelText('Moda'));
    fireEvent.click(screen.getByRole('button', { name: 'Suscribirme' }));

    expect(await screen.findByText('¡Suscripción exitosa! Bienvenido/a a CARAS.')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByLabelText('Nombre completo')).toHaveValue('');
      expect(screen.getByLabelText('Correo electrónico')).toHaveValue('');
      expect(screen.getByLabelText('Moda')).not.toBeChecked();
    });
  });
});
