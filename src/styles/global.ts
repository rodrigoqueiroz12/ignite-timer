import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    border-radius: 4px;
  }

  body {
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    html {
      font-size: 80%;
    }
  }
`
