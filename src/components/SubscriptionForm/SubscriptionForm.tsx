import React, { useEffect, useRef } from 'react';
import useSubscriptionForm from '../../hooks/useSubscriptionForm';
import Icon from '../Icon/Icon';
import { SubscriptionFrequency } from '../../types';
import {
  SubscribeWrapper,
  SubscribeTitle,
  SubscribeIntro,
  Steps,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormError,
  FormFieldset,
  FormLegend,
  OptionsRow,
  OptionLabel,
  FormMessage,
  SubmitButton,
} from './SubscriptionForm.styles';

// `lang` marca las palabras en inglés para que el lector de pantalla las pronuncie bien.
const TOPICS: { value: string; label: string; lang?: string }[] = [
  { value: 'entretenimiento', label: 'Entretenimiento' },
  { value: 'moda', label: 'Moda' },
  { value: 'lifestyle', label: 'Lifestyle', lang: 'en' },
  { value: 'noticias', label: 'Noticias' },
];

const FREQUENCIES: { value: SubscriptionFrequency; label: string }[] = [
  { value: 'semanal', label: 'Semanal' },
  { value: 'quincenal', label: 'Quincenal' },
  { value: 'mensual', label: 'Mensual' },
];

function SubscriptionForm() {
  const {
    formData,
    errors,
    messageStatus,
    failedSubmits,
    handleChange,
    handleTopicToggle,
    handleFrequencyChange,
    handleSubmit,
  } = useSubscriptionForm();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Si el envío falla, el foco pasa al primer campo con error para corregirlo de inmediato.
  useEffect(() => {
    if (failedSubmits === 0) return;
    if (errors.name) nameRef.current?.focus();
    else if (errors.email) emailRef.current?.focus();
    // Solo debe ejecutarse cuando cambia el número de envíos fallidos.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [failedSubmits]);

  const nameIsValid = formData.name.trim() !== '' && !errors.name;
  const emailIsValid = formData.email.trim() !== '' && !errors.email;

  return (
    <SubscribeWrapper id="suscripcion" aria-labelledby="suscripcion-title">
      <SubscribeTitle id="suscripcion-title">Suscríbete ahora</SubscribeTitle>
      <SubscribeIntro>
        Solo necesitamos tu nombre y tu correo. Los demás campos son opcionales.
      </SubscribeIntro>

      <Steps>
        <li>Escribe tus datos</li>
        <li>Elige tus temas</li>
        <li>Recibe CARAS en tu correo</li>
      </Steps>

      <Form onSubmit={handleSubmit} noValidate aria-label="Formulario de suscripción">
        <FormGroup>
          <FormLabel htmlFor="name">Nombre completo</FormLabel>
          <FormInput
            ref={nameRef}
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre completo"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            $hasError={Boolean(errors.name)}
            $isValid={nameIsValid}
          />
          {errors.name && <FormError id="name-error">{errors.name}</FormError>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <FormInput
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@correo.com"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            $hasError={Boolean(errors.email)}
            $isValid={emailIsValid}
          />
          {errors.email && <FormError id="email-error">{errors.email}</FormError>}
        </FormGroup>

        {/* fieldset + legend agrupa las casillas y el lector anuncia el grupo antes de cada opción. */}
        <FormFieldset>
          <FormLegend>Temas que te interesan (opcional)</FormLegend>
          <OptionsRow>
            {TOPICS.map((topic) => (
              <OptionLabel key={topic.value} htmlFor={`topic-${topic.value}`}>
                <input
                  type="checkbox"
                  id={`topic-${topic.value}`}
                  name="topics"
                  value={topic.value}
                  checked={formData.topics.includes(topic.value)}
                  onChange={() => handleTopicToggle(topic.value)}
                />
                <span lang={topic.lang}>{topic.label}</span>
              </OptionLabel>
            ))}
          </OptionsRow>
        </FormFieldset>

        <FormFieldset>
          <FormLegend>¿Con qué frecuencia quieres recibirnos?</FormLegend>
          <OptionsRow>
            {FREQUENCIES.map((frequency) => (
              <OptionLabel key={frequency.value} htmlFor={`frequency-${frequency.value}`}>
                <input
                  type="radio"
                  id={`frequency-${frequency.value}`}
                  name="frequency"
                  value={frequency.value}
                  checked={formData.frequency === frequency.value}
                  onChange={() => handleFrequencyChange(frequency.value)}
                />
                <span>{frequency.label}</span>
              </OptionLabel>
            ))}
          </OptionsRow>
        </FormFieldset>

        {/* La región "status" existe siempre; así los lectores anuncian el texto cuando aparece. */}
        <FormMessage role="status" aria-live="polite" $status={messageStatus}>
          {messageStatus === 'success' && '¡Suscripción exitosa! Bienvenido/a a CARAS.'}
          {messageStatus === 'error' && 'Por favor corrige los errores antes de continuar.'}
        </FormMessage>

        <SubmitButton type="submit">
          <Icon name="send" size={18} /> Suscribirme
        </SubmitButton>
      </Form>
    </SubscribeWrapper>
  );
}

export default SubscriptionForm;
