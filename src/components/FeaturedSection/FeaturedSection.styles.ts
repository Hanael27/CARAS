import styled from 'styled-components';

export const FeaturedWrapper = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-top: 2.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedImage = styled.div`
  max-height: 26.25rem;
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-height: 17.5rem;
  }
`;

export const FeaturedText = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 1.875rem;
  border-radius: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.25rem;
    font-family: ${(props) => props.theme.fonts.ui};
  }
`;
