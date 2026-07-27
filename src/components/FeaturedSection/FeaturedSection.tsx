import React from 'react';
import { FeaturedWrapper, FeaturedImage, FeaturedText } from './FeaturedSection.styles';

interface FeaturedSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  benefits: string[];
}

function FeaturedSection({ imageSrc, imageAlt, title, benefits }: FeaturedSectionProps) {
  return (
    <FeaturedWrapper>
      <FeaturedImage>
        <img src={imageSrc} alt={imageAlt} />
      </FeaturedImage>

      <FeaturedText>
        <h2>{title}</h2>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </FeaturedText>
    </FeaturedWrapper>
  );
}

export default FeaturedSection;
