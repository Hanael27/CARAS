import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 6.25rem;
  background: ${(props) => props.theme.colors.footerBg};
  color: ${(props) => props.theme.colors.onFooter};
`;

export const FooterContainer = styled.div`
  text-align: center;
  padding: 1.875rem;
`;

export const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.5rem;
  margin-bottom: 0.9375rem;
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 1rem;

  a {
    color: ${(props) => props.theme.colors.onFooter};
    padding: 0.5rem 0.25rem;
    text-decoration: underline;
    text-underline-offset: 0.25em;

    &:hover {
      text-decoration-thickness: 2px;
    }
  }
`;

export const FooterContact = styled.p`
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 1rem;
  margin-bottom: 0.5rem;

  a {
    color: ${(props) => props.theme.colors.onFooter};
    text-decoration: underline;
    text-underline-offset: 0.25em;

    &:hover {
      text-decoration-thickness: 2px;
    }
  }
`;

// Sin `opacity`: bajar la opacidad del texto reduce su contraste sin que se note en el código.
export const FooterCopy = styled.p`
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.9375rem;
  color: ${(props) => props.theme.colors.onFooter};
`;
