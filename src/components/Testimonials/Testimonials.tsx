import React from 'react';
import { Testimonial } from '../../types';
import {
  TestimonialsWrapper,
  TestimonialsTitle,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialPhoto,
  TestimonialQuote,
  TestimonialAuthor,
} from './Testimonials.styles';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <TestimonialsWrapper>
      <TestimonialsTitle>Lo que dicen nuestros lectores</TestimonialsTitle>

      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialPhoto
              src={testimonial.photo}
              alt={`Foto de ${testimonial.author}`}
            />
            <TestimonialQuote>&quot;{testimonial.quote}&quot;</TestimonialQuote>
            <TestimonialAuthor>— {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsWrapper>
  );
}

export default Testimonials;
