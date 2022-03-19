import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secundary: string,
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