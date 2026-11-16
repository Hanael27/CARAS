import styled from 'styled-components';

export const FeaturedWrapper = styled.section`
  margin-top: 5rem;
`;

export const FeaturedTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  list-style: none;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitCard = styled.li`
  background: ${(props) => props.theme.colors.card};
  padding: 1.875rem;
  border-radius: 1rem;
`;

export const BenefitIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  border-radius: 50%;
`;

export const BenefitTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export const BenefitText = styled.p`
  font-family: ${(props) => props.theme.fonts.ui};
  color: ${(props) => props.theme.colors.muted};
`;
