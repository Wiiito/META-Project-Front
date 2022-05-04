import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export const colors = {
  darkGray: '#667F7D',
  turquoise: '#80FFF2',
  lightBlue: '#CDFFFA',
  bluishGreen: '#347F77',
  lightGray: '#A4CCC8',
  /* 
  //Color Theme Swatches in Hex 
  $CALMA-MONOCROMATICO-1-hex: #667F7D;
  $CALMA-MONOCROMATICO-2-hex: #80FFF2;
  $CALMA-MONOCROMATICO-3-hex: #CDFFFA;
  $CALMA-MONOCROMATICO-4-hex: #347F77;
  $CALMA-MONOCROMATICO-5-hex: #A4CCC8;
*/
}

export const Theme = ({ children }) => {
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>
}

export default GlobalStyles
