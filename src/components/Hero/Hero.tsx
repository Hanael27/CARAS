import React from 'react';
import Icon from '../Icon/Icon';
import markLanguages from '../../utils/markLanguages';
import {
  HeroWrapper,
  HeroText,
  HeroTitle,
  HeroLead,
  HeroActions,
  PrimaryLink,
  SecondaryLink,
  HeroImage,
} from './Hero.styles';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
}

// Primera pantalla: dice qué es CARAS y deja claro qué hacer (suscribirse).
function Hero({ imageSrc, imageAlt }: HeroProps) {
  return (
    <HeroWrapper id="inicio" aria-labelledby="hero-title" tabIndex={-1}>
      <HeroText>
        <HeroTitle id="hero-title">
          {markLanguages('Lo mejor del entretenimiento, moda y lifestyle')}
        </HeroTitle>
        <HeroLead>
          {markLanguages(
            'Suscríbete al newsletter de CARAS y recibe noticias, tendencias y contenido curado por expertos directo en tu correo.'
          )}
        </HeroLead>

        <HeroActions>
          <PrimaryLink href="#suscripcion">
            <Icon name="send" size={18} /> Quiero suscribirme
          </PrimaryLink>
          <SecondaryLink href="#beneficios">Conocer los beneficios</SecondaryLink>
        </HeroActions>
      </HeroText>

      <HeroImage>
        <img src={imageSrc} alt={imageAlt} width={1845} height={965} />
      </HeroImage>
    </HeroWrapper>
  );
}

export default Hero;
