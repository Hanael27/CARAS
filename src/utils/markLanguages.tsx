import React from 'react';

// Marca con el atributo `lang` las palabras que no son español, para que los
// lectores de pantalla las pronuncien con la fonética correcta (WCAG 3.1.2).
// Para agregar otro término, solo añádelo a este objeto.
const LANG_TERMS: Record<string, string> = {
  lifestyle: 'en',
  newsletter: 'en',
};

const PATTERN = new RegExp(`\\b(${Object.keys(LANG_TERMS).join('|')})\\b`, 'gi');

export default function markLanguages(text: string): React.ReactNode[] {
  return text.split(PATTERN).map((part, index) => {
    const lang = LANG_TERMS[part.toLowerCase()];
    return lang ? (
      <span key={index} lang={lang}>
        {part}
      </span>
    ) : (
      part
    );
  });
}
