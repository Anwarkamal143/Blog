import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global.styled';
import { theme } from './theme';

export type StyledTypes = {
  children: ReactNode | JSX.Element;
};

export function StyledLayoutWrapper(props: StyledTypes) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
