import React from 'react';
import { SocialLink } from './Footer.types';
import {
  FooterWrapper,
  FooterContainer,
  FooterLinks,
  FooterContact,
  FooterCopy,
} from './Footer.styles';

interface FooterProps {
  socialLinks: SocialLink[];
  contactEmail: string;
}

function Footer({ socialLinks, contactEmail }: FooterProps) {
  return (
    <FooterWrapper id="contacto" aria-labelledby="contacto-title">
      <FooterContainer>
        {/* Encabezado solo para lectores de pantalla: permite saltar al pie con la tecla de títulos. */}
        <h2 id="contacto-title" className="sr-only">
          Contacto y redes sociales
        </h2>

        <FooterLinks aria-label="Redes sociales de CARAS">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          ))}
        </FooterLinks>

        <FooterContact>
          Contacto:{' '}
          <a href={`mailto:${contactEmail}`} aria-label={`Escribir un correo a ${contactEmail}`}>
            {contactEmail}
          </a>
        </FooterContact>

        <FooterCopy>© CARAS México</FooterCopy>
        <FooterCopy>
          Sitio creado con <span lang="en">React</span> y <span lang="en">styled-components</span>.
        </FooterCopy>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
