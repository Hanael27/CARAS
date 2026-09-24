import { useState, ChangeEvent, FormEvent } from 'react';
import {
  SubscriptionFormData,
  SubscriptionFormErrors,
  FormMessageStatus,
} from '../types';
import { validateName, validateEmail } from '../utils/validation';

const INITIAL_DATA: SubscriptionFormData = { name: '', email: '' };
const INITIAL_ERRORS: SubscriptionFormErrors = { name: '', email: '' };

interface UseSubscriptionFormResult {
  formData: SubscriptionFormData;
  errors: SubscriptionFormErrors;
  messageStatus: FormMessageStatus;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

// Replica la validación en tiempo real y al enviar que antes vivía en script.js,
// pero manejando el estado del formulario con useState en lugar de manipular el DOM directamente.
function useSubscriptionForm(): UseSubscriptionFormResult {
  const [formData, setFormData] = useState<SubscriptionFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<SubscriptionFormErrors>(INITIAL_ERRORS);
  const [messageStatus, setMessageStatus] = useState<FormMessageStatus>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'name') {
      setErrors((prevErrors) => ({ ...prevErrors, name: validateName(value) }));
    }

    if (name === 'email') {
      setErrors((prevErrors) => ({ ...prevErrors, email: validateEmail(value) }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const isValid = !nameError && !emailError;

    setErrors({ name: nameError, email: emailError });

    if (isValid) {
      setMessageStatus('success');
      setFormData(INITIAL_DATA);
    } else {
      setMessageStatus('error');
    }
  };

  return { formData, errors, messageStatus, handleChange, handleSubmit };
}

export default useSubscriptionForm;
