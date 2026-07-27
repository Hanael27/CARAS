import React from 'react';
import useSubscriptionForm from '../../hooks/useSubscriptionForm';
import {
  SubscribeWrapper,
  SubscribeTitle,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormError,
  FormMessage,
  SubmitButton,
} from './SubscriptionForm.styles';

function SubscriptionForm() {
  const { formData, errors, messageStatus, handleChange, handleSubmit } =
    useSubscriptionForm();

  const nameIsValid = formData.name.trim() !== '' && !errors.name;
  const emailIsValid = formData.email.trim() !== '' && !errors.email;

  return (
    <SubscribeWrapper>
      <SubscribeTitle>Suscríbete ahora</SubscribeTitle>

      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <FormLabel htmlFor="name">Nombre completo</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre completo"
            value={formData.name}
            onChange={handleChange}
            $hasError={Boolean(errors.name)}
            $isValid={nameIsValid}
          />
          <FormError role="alert" $visible={Boolean(errors.name)}>
            {errors.name}
          </FormError>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
            $hasError={Boolean(errors.email)}
            $isValid={emailIsValid}
          />
          <FormError role="alert" $visible={Boolean(errors.email)}>
            {errors.email}
          </FormError>
        </FormGroup>

        <FormMessage role="status" aria-live="polite" $status={messageStatus}>
          {messageStatus === 'success' && '¡Suscripción exitosa! Bienvenido/a a CARAS.'}
          {messageStatus === 'error' && 'Por favor corrige los errores antes de continuar.'}
        </FormMessage>

        <SubmitButton type="submit">Suscribirme</SubmitButton>
      </Form>
    </SubscribeWrapper>
  );
}

export default SubscriptionForm;
