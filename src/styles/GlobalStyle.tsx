import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) =>
      theme.colors.background === 'transparent'
        ? '#e5e5e5'
        : theme.colors.background
    };
    transition: background-color 0.3s ease;
  }
`