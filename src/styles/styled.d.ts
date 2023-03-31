import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secundary: string,
      success: string,
      danger: string,
      warning: string,
      info: string,
      light: string,
      dark: string,
      black: string,
      white: string,
      equivalent: string,
      background: string,
      sidebar: string,
      header: string,
      panel: string,
      text: string,
      hover: string,
      shadow: {
        primary: string,
        secundary: string
      }
    }
  }
}