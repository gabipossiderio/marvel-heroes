import 'styled-components'
import type { ThemeTokens } from '../styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeTokens['colors']
  }
}