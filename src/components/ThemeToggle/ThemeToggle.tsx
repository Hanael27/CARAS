import React from 'react';
import Icon from '../Icon/Icon';
import { ToggleButton, ToggleTrack, ToggleThumb, ToggleText } from './ThemeToggle.styles';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

// Interruptor accesible: es un <button role="switch">, por lo que se activa con
// Enter/Espacio y los lectores de pantalla anuncian "Modo oscuro, activado/desactivado".
function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <ToggleButton type="button" role="switch" aria-checked={isDark} onClick={onToggle}>
      <ToggleTrack aria-hidden="true">
        <ToggleThumb $on={isDark}>
          <Icon name={isDark ? 'moon' : 'sun'} size={14} />
        </ToggleThumb>
      </ToggleTrack>
      {/* Texto visible en escritorio; en móvil solo queda para lectores de pantalla. */}
      <ToggleText>Modo oscuro</ToggleText>
    </ToggleButton>
  );
}

export default ThemeToggle;
