// Tipos relacionados con el tema visual
export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  bg: string;
  text: string;
  accent: string;
  card: string;
}

export interface AppTheme {
  mode: ThemeMode;
  colors: ThemeColors;
  fonts: {
    title: string;
    ui: string;
  };
  breakpoints: {
    tablet: string;
  };
}

// Tipos del formulario de suscripción
export interface SubscriptionFormData {
  name: string;
  email: string;
}

export interface SubscriptionFormErrors {
  name: string;
  email: string;
}

export type FormMessageStatus = 'idle' | 'success' | 'error';

// Tipos de los testimonios
export interface Testimonial {
  id: string;
  photo: string;
  quote: string;
  author: string;
}
