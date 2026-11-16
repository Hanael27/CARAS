import { useEffect, useState } from 'react';

// Indica si la página ya se desplazó más de `offset` píxeles (para mostrar "Volver arriba").
function useScrolledPast(offset: number): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsPast(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return isPast;
}

export default useScrolledPast;
