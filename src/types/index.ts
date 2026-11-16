// Tipos relacionados con el tema visual
export type ThemeMode = 'light' | 'dark';

// Cada color se nombra por su función (no por su tono) para que los pares
// texto/fondo sean fáciles de revisar contra el contraste mínimo WCAG AA.
export interface ThemeColors {
  bg: string;
  text: string;
  muted: string;
  card: string;
  border: string;
  primary: string;
  primaryHover: string;
  onPrimary: string;
  headerBg: string;
  onHeader: string;
  link: string;
  focus: string;
  inputBg: string;
  danger: string;
  dangerText: string;
  dangerBg: string;
  success: string;
  successText: string;
  successBg: string;
  footerBg: string;
  onFooter: string;
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
export type SubscriptionFrequency = 'semanal' | 'quincenal' | 'mensual';

export interface SubscriptionFormData {
  name: string;
  email: string;
  topics: string[];
  frequency: SubscriptionFrequency;
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
  // Descripción de la foto para lectores de pantalla. Si falta se usa "Foto de {autor}".
  photoAlt?: string;
  quote: string;
  author: string;
}

// Tipos de la navegación y de los beneficios
export interface NavItem {
  id: string;
  label: string;
}

export type IconName =
  | 'menu'
  | 'close'
  | 'sun'
  | 'moon'
  | 'arrowUp'
  | 'send'
  | 'mail'
  | 'check'
  | 'star'
  | 'trend'
  | 'badge';

export interface Benefit {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}
