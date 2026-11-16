import styled from 'styled-components';

export const TestimonialsWrapper = styled.section`
  margin-top: 5rem;
`;

export const TestimonialsTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const TestimonialsGrid = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.li`
  text-align: center;
  background: ${(props) => props.theme.colors.card};
  padding: 1.875rem;
  border-radius: 1rem;
`;

export const TestimonialPhoto = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  object-position: top; /* los retratos son verticales: se muestra el rostro */
  border-radius: 50%;
  margin-bottom: 0.9375rem;
`;

export const TestimonialQuote = styled.p`
  font-style: italic;
`;

export const TestimonialAuthor = styled.figcaption`
  display: block;
  margin-top: 0.5rem;
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.muted};
`;
