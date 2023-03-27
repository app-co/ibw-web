import { createGlobalStyle } from 'styled-components'
import { cor } from './colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${cor.cinza[3]};
    color: ${cor.text[2]}
  }

  button {
    border-radius: 6px;
    border: none;
    padding: 4px 10px;

    &:hover {
      opacity: .8;
      cursor: pointer;
    }
  }
`
