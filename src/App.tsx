import React from 'react';
import { ThemeProvider } from 'styled-components';
import SkipLink from './components/SkipLink/SkipLink';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import useThemeToggle from './hooks/useThemeToggle';
import useActiveSection from './hooks/useActiveSection';
import GlobalStyle from './styles/GlobalStyle';
import { Benefit, NavItem, Testimonial } from './types';
import { SocialLink } from './components/Footer/Footer.types';

// Cada id corresponde a una sección de la página (ver el atributo id de cada componente).
const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'suscripcion', label: 'Suscripción' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contacto', label: 'Contacto' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const BENEFITS: Benefit[] = [
  {
    id: 'noticias',
    icon: 'star',
    title: 'Noticias exclusivas',
    description: 'Entérate primero de lo que pasa en el mundo del espectáculo.',
  },
  {
    id: 'moda',
    icon: 'trend',
    title: 'Tendencias en moda',
    description: 'Descubre los looks y estilos que marcan cada temporada.',
  },
  {
    id: 'curado',
    icon: 'badge',
    title: 'Contenido curado por expertos',
    description: 'Una selección editorial hecha por nuestro equipo, sin relleno.',
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'daniela',
    photo: '/img/Daniela.png',
    photoAlt: 'Retrato de Daniela: mujer de cabello castaño largo con camisa de mezclilla azul, sonriendo',
    quote: 'CARAS siempre me mantiene informada.',
    author: 'Daniela M.',
  },
  {
    id: 'luis',
    photo: '/img/Luis.png',
    photoAlt: 'Retrato de Luis: hombre de cabello oscuro con traje azul marino y corbata azul claro, sonriendo',
    quote: 'Mi newsletter favorito.',
    author: 'Luis R.',
  },
  {
    id: 'sofia',
    photo: '/img/Sofia.png',
    photoAlt: 'Retrato de Sofía: mujer de cabello negro largo con camisa azul marino',
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
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <SkipLink />

      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        navItems={NAV_ITEMS}
        activeId={activeId}
      />

      <main id="contenido-principal" tabIndex={-1}>
        <Hero
          imageSrc="/img/Logo-Caras.png"
          imageAlt="Logotipo de la revista CARAS en letras blancas sobre fondo rojo"
        />

        <FeaturedSection title="¿Por qué suscribirte?" benefits={BENEFITS} />

        <SubscriptionForm />

        <Testimonials testimonials={TESTIMONIALS} />
      </main>

      <Footer socialLinks={SOCIAL_LINKS} contactEmail={CONTACT_EMAIL} />

      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
