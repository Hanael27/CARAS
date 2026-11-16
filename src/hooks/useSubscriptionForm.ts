import { useState, ChangeEvent, FormEvent } from 'react';
import {
  SubscriptionFormData,
  SubscriptionFormErrors,
  SubscriptionFrequency,
  FormMessageStatus,
} from '../types';
import { validateName, validateEmail } from '../utils/validation';

const INITIAL_DATA: SubscriptionFormData = {
  name: '',
  email: '',
  topics: [],
  frequency: 'semanal',
};
const INITIAL_ERRORS: SubscriptionFormErrors = { name: '', email: '' };

interface UseSubscriptionFormResult {
  formData: SubscriptionFormData;
  errors: SubscriptionFormErrors;
  messageStatus: FormMessageStatus;
  // Cuenta los envíos con errores; permite devolver el foco al primer campo
  // inválido cada vez que se intenta enviar, aunque el estado no cambie.
  failedSubmits: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTopicToggle: (topic: string) => void;
  handleFrequencyChange: (frequency: SubscriptionFrequency) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

// Validación en tiempo real y al enviar. El estado del formulario se maneja con useState.
function useSubscriptionForm(): UseSubscriptionFormResult {
  const [formData, setFormData] = useState<SubscriptionFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<SubscriptionFormErrors>(INITIAL_ERRORS);
  const [messageStatus, setMessageStatus] = useState<FormMessageStatus>('idle');
  const [failedSubmits, setFailedSubmits] = useState(0);

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

  const handleTopicToggle = (topic: string) => {
    setFormData((prevData) => ({
      ...prevData,
      topics: prevData.topics.includes(topic)
        ? prevData.topics.filter((item) => item !== topic)
        : [...prevData.topics, topic],
    }));
  };

  const handleFrequencyChange = (frequency: SubscriptionFrequency) => {
    setFormData((prevData) => ({ ...prevData, frequency }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const isValid = !nameError && !emailError;

    setErrors({ name: nameError, email: emailError });

    if (isValid) {
      // Este sitio no tiene backend: aquí iría la petición que envía la suscripción.
      setMessageStatus('success');
      setFormData(INITIAL_DATA);
    } else {
      setMessageStatus('error');
      setFailedSubmits((count) => count + 1);
    }
  };

  return {
    formData,
    errors,
    messageStatus,
    failedSubmits,
    handleChange,
    handleTopicToggle,
    handleFrequencyChange,
    handleSubmit,
  };
}

export default useSubscriptionForm;
