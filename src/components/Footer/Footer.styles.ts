import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 6.25rem;
  background: #111;
  color: #fff;
`;

export const FooterContainer = styled.div`
  text-align: center;
  padding: 1.875rem;
`;

export const FooterLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 0.9375rem;
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.8125rem;

  a {
    color: #fff;
    text-decoration: none;
    opacity: 0.85;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

export const FooterContact = styled.p`
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.8125rem;
  margin-bottom: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterCopy = styled.p`
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.8125rem;
  opacity: 0.7;
`;
