import { createContext } from 'react'
import type { ThemeTokens } from '../styles/theme'

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  tokens: ThemeTokens
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)