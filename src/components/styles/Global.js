import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&family=Hurricane&family=Poppins:wght@300&display=swap");
  
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({theme}) => theme.colors.body};
    color: #274001;
    font-family: 'Fredoka';
    font-size: 1.15em;
    margin: 0;
  }
  h1 {
    font-family: 'Fredoka';
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`

export default GlobalStyles;