import React, { useEffect, useRef, useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Icon from '../Icon/Icon';
import { NavItem } from '../../types';
import {
  HeaderWrapper,
  HeaderContainer,
  BrandLink,
  HeaderLogo,
  HeaderControls,
  MenuButton,
  MainNav,
  NavList,
  NavAnchor,
} from './Header.styles';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  navItems: NavItem[];
  activeId?: string;
}

function Header({ isDark, onToggleTheme, navItems, activeId }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Con el menú móvil abierto, Escape lo cierra y devuelve el foco al botón.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <BrandLink href="#inicio" onClick={() => setMenuOpen(false)}>
          {/* Logo claro sobre el encabezado rojo; logo rojo sobre el encabezado oscuro. */}
          <HeaderLogo
            src={isDark ? '/img/Logo1.png' : '/img/Logo2.png'}
            alt="CARAS"
            width={800}
            height={218}
          />
          <span className="sr-only">, ir al inicio</span>
        </BrandLink>

        <HeaderControls>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <MenuButton
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </MenuButton>
        </HeaderControls>

        <MainNav id="menu-principal" aria-label="Navegación principal" $open={menuOpen}>
          <NavList role="list">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavAnchor
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavAnchor>
              </li>
            ))}
          </NavList>
        </MainNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
