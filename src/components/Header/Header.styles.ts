import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.colors.accent};
  color: #fff;
  padding: 1rem 1.5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderLogos = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.img<{ $visible: boolean }>`
  height: 3rem;
  display: ${(props) => (props.$visible ? 'block' : 'none')};
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.375rem;
  font-family: ${(props) => props.theme.fonts.title};
`;

export const HeaderSubtitle = styled.p`
  font-size: 0.8125rem;
  font-family: ${(props) => props.theme.fonts.ui};
  font-weight: 300;
`;

export const HeaderThemeSwitch = styled.div`
  margin-left: auto;
`;
