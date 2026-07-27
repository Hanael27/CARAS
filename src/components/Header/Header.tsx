import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogos,
  HeaderLogo,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  HeaderThemeSwitch,
} from './Header.styles';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogos>
          <HeaderLogo src="/img/Logo2.png" alt="CARAS" $visible={!isDark} />
          <HeaderLogo src="/img/Logo1.png" alt="CARAS" $visible={isDark} />
        </HeaderLogos>

        <HeaderText>
          <HeaderTitle>CARAS</HeaderTitle>
          <HeaderSubtitle>
            Lo mejor del entretenimiento, moda y lifestyle
          </HeaderSubtitle>
        </HeaderText>

        <HeaderThemeSwitch>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </HeaderThemeSwitch>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
