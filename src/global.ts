import { createGlobalStyle, ThemeProps } from 'styled-components';

type Theme = {
    body: string,
    text: string
}

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }: ThemeProps<Theme>) => theme.body};
    color: ${({ theme }: ThemeProps<Theme>) => theme.text};
    display: flex;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;