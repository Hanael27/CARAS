import React from 'react';
import { render } from '@testing-library/react';
import markLanguages from '../utils/markLanguages';

describe('markLanguages', () => {
  it('envuelve las palabras en inglés con lang="en"', () => {
    const { container } = render(<p>{markLanguages('Moda y lifestyle')}</p>);

    expect(container.querySelector('span[lang="en"]')).toHaveTextContent('lifestyle');
    expect(container.querySelector('p')).toHaveTextContent('Moda y lifestyle');
  });

  it('no distingue mayúsculas y conserva el texto original', () => {
    const { container } = render(<p>{markLanguages('Nuestro Newsletter')}</p>);

    expect(container.querySelector('[lang="en"]')).toHaveTextContent('Newsletter');
  });

  it('no modifica el texto que no tiene palabras en otro idioma', () => {
    const { container } = render(<p>{markLanguages('Elegante y confiable.')}</p>);

    expect(container.querySelector('[lang]')).toBeNull();
    expect(container.querySelector('p')).toHaveTextContent('Elegante y confiable.');
  });
});
