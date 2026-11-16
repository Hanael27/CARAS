import { useEffect, useState } from 'react';

// Devuelve el id de la sección que se está viendo, para resaltarla en el menú
// y que la persona sepa en qué parte de la página está.
// IntersectionObserver puede no existir (pruebas con jsdom): entonces queda la primera sección.
function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    // La "franja de lectura" es una banda estrecha cerca del centro de la pantalla.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default useActiveSection;
