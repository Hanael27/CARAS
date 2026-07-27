import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import useThemeToggle from './hooks/useThemeToggle';
import GlobalStyle from './styles/GlobalStyle';
import { Testimonial } from './types';
import { SocialLink } from './components/Footer/Footer.types';

const BENEFITS: string[] = [
  'Noticias exclusivas',
  'Tendencias en moda',
  'Contenido curado por expertos',
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'daniela',
    photo: '/img/Daniela.png',
    quote: 'CARAS siempre me mantiene informada.',
    author: 'Daniela M.',
  },
  {
    id: 'luis',
    photo: '/img/Luis.png',
    quote: 'Mi newsletter favorito.',
    author: 'Luis R.',
  },
  {
    id: 'sofia',
    photo: '/img/Sofia.png',
    quote: 'Elegante y confiable.',
    author: 'Sofía G.',
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/caras' },
  { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/caras' },
  { id: 'x', label: 'X', url: 'https://x.com/caras' },
];

const CONTACT_EMAIL = 'contacto@caras.mx';

function App() {
  const { theme, isDark, toggleTheme } = useThemeToggle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <main>
        <FeaturedSection
          imageSrc="/img/Logo-Caras.png"
          imageAlt="Imagen principal de la revista CARAS"
          title="¿Por qué suscribirte?"
          benefits={BENEFITS}
        />

        <SubscriptionForm />

        <Testimonials testimonials={TESTIMONIALS} />
      </main>

      <Footer socialLinks={SOCIAL_LINKS} contactEmail={CONTACT_EMAIL} />
    </ThemeProvider>
  );
}

export default App;
