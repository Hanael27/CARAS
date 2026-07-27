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
    <FooterWrapper>
      <FooterContainer>
        <FooterLinks aria-label="Redes sociales de CARAS">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </FooterLinks>

        <FooterContact>
          Contacto: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </FooterContact>

        <FooterCopy>© CARAS México</FooterCopy>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
