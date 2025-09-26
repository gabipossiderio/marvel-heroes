export interface ThemeTokens {
  colors: {
    primary: string
    primaryHover: string
    secondary: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
    shadow: string
    scrollbar: string
    scrollbarHover: string
  }
}

export const lightTheme: ThemeTokens = {
  colors: {
    primary: '#167abc',
    primaryHover: '#0f5a94',
    secondary: '#34495e',
    background: 'transparent',
    surface: 'white',
    text: '#333333',
    textSecondary: '#555555',
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)',
    scrollbar: 'rgba(22, 122, 188, 0.3)',
    scrollbarHover: 'rgba(22, 122, 188, 0.5)',
  }
}

export const darkTheme: ThemeTokens = {
  colors: {
    primary: '#3498db',
    primaryHover: '#2980b9',
    secondary: '#ecf0f1',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#f5f5f5',
    textSecondary: '#e8e8e8',
    border: '#333333',
    shadow: 'rgba(0, 0, 0, 0.4)',
    scrollbar: 'rgba(52, 152, 219, 0.3)',
    scrollbarHover: 'rgba(52, 152, 219, 0.5)',
  }
}

export const getTheme = (themeName: 'light' | 'dark'): ThemeTokens => {
  return themeName === 'light' ? lightTheme : darkTheme
}