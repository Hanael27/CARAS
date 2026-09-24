import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithTheme } from './test-utils';
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm';

describe('SubscriptionForm - renderizado', () => {
  it('renderiza los campos de nombre y correo, y el botón de envío', () => {
    renderWithTheme(<SubscriptionForm />);

    expect(screen.getByLabelText('Nombre completo')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Suscribirme' })
    ).toBeInTheDocument();
  });

  it('renderiza los contenedores de mensajes de error junto a cada campo', () => {
    renderWithTheme(<SubscriptionForm />);

    // Los errores se muestran en elementos con role="alert". Al inicio están
    // vacíos y ocultos (display: none), así que se incluyen con { hidden: true }.
    const alerts = screen.getAllByRole('alert', { hidden: true });
    expect(alerts).toHaveLength(2);
    alerts.forEach((alert) => expect(alert).toHaveTextContent(''));
  });
});

describe('SubscriptionForm - validación', () => {
  it('muestra un error cuando el campo de nombre se deja vacío', () => {
    renderWithTheme(<SubscriptionForm />);

    const nameInput = screen.getByLabelText('Nombre completo');
    fireEvent.change(nameInput, { target: { value: 'Ana' } });
    fireEvent.change(nameInput, { target: { value: '' } });

    expect(
      screen.getByText('El nombre no puede estar vacío.')
    ).toBeInTheDocument();
  });

  it('muestra un error cuando el correo no tiene un formato válido', () => {
    renderWithTheme(<SubscriptionForm />);

    const emailInput = screen.getByLabelText('Correo electrónico');
    fireEvent.change(emailInput, { target: { value: 'correo-invalido' } });

    expect(
      screen.getByText('Ingresa un correo electrónico válido.')
    ).toBeInTheDocument();
  });

  it('muestra ambos errores y el mensaje general al enviar el formulario vacío', async () => {
    renderWithTheme(<SubscriptionForm />);

    fireEvent.click(screen.getByRole('button', { name: 'Suscribirme' }));

    expect(
      await screen.findByText('El nombre no puede estar vacío.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Ingresa un correo electrónico válido.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Por favor corrige los errores antes de continuar.')
    ).toBeInTheDocument();
  });

  it('muestra el mensaje de éxito cuando los datos son válidos', async () => {
    renderWithTheme(<SubscriptionForm />);

    fireEvent.change(screen.getByLabelText('Nombre completo'), {
      target: { value: 'Ana López' },
    });
    fireEvent.change(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'ana@correo.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Suscribirme' }));

    expect(
      await screen.findByText('¡Suscripción exitosa! Bienvenido/a a CARAS.')
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByLabelText('Nombre completo')).toHaveValue('');
      expect(screen.getByLabelText('Correo electrónico')).toHaveValue('');
    });
  });
});
