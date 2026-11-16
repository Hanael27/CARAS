import React from 'react';
import Icon from '../Icon/Icon';
import { Benefit } from '../../types';
import {
  FeaturedWrapper,
  FeaturedTitle,
  BenefitsList,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitText,
} from './FeaturedSection.styles';

interface FeaturedSectionProps {
  title: string;
  benefits: Benefit[];
}

function FeaturedSection({ title, benefits }: FeaturedSectionProps) {
  return (
    <FeaturedWrapper id="beneficios" aria-labelledby="beneficios-title">
      <FeaturedTitle id="beneficios-title">{title}</FeaturedTitle>

      {/* role="list" mantiene la semántica de lista en Safari/VoiceOver aunque se quite el estilo de viñetas. */}
      <BenefitsList role="list">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id}>
            <BenefitIcon>
              <Icon name={benefit.icon} size={26} />
            </BenefitIcon>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitText>{benefit.description}</BenefitText>
          </BenefitCard>
        ))}
      </BenefitsList>
    </FeaturedWrapper>
  );
}

export default FeaturedSection;
