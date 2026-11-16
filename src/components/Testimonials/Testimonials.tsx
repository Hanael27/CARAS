import React from 'react';
import { Testimonial } from '../../types';
import markLanguages from '../../utils/markLanguages';
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
    <TestimonialsWrapper id="testimonios" aria-labelledby="testimonios-title">
      <TestimonialsTitle id="testimonios-title">Lo que dicen nuestros lectores</TestimonialsTitle>

      <TestimonialsGrid role="list">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <figure>
              <TestimonialPhoto
                src={testimonial.photo}
                alt={testimonial.photoAlt ?? `Foto de ${testimonial.author}`}
                width={80}
                height={80}
                loading="lazy"
              />
              <blockquote>
                <TestimonialQuote>&quot;{markLanguages(testimonial.quote)}&quot;</TestimonialQuote>
              </blockquote>
              <TestimonialAuthor>— {testimonial.author}</TestimonialAuthor>
            </figure>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsWrapper>
  );
}

export default Testimonials;
