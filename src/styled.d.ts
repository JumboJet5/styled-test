import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    THEME_NAME: 'dark' | 'light'
    evenBackgroundColor: string
    oddBackgroundColor: string
  }
}
