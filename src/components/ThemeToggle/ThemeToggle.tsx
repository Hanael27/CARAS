import React from 'react';
import { Switch, SwitchSlider } from './ThemeToggle.styles';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <Switch aria-label="Cambiar tema claro u oscuro">
      <input
        type="checkbox"
        checked={isDark}
        onChange={onToggle}
        title="Cambiar tema"
      />
      <SwitchSlider />
    </Switch>
  );
}

export default ThemeToggle;
