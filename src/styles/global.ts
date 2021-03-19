import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-neutral-100: '#FAFAFA';
    --color-neutral-200: '#F2F2F2';
    --color-neutral-300: '#e1e1e1';
    --color-neutral-700: '#9FA2B0';
    --color-neutral-800: '#4A4B53';
    --color-neutral-900: '#2E2E2E';

    --color-green: '#3CC64A';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    color: var(--color-neutral-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  button {
    cursor: pointer;
    font-weight: 700;
  }

  [disabled] {
    opacity: 0.6;
    cursor: disabled;
  }
`

export { GlobalStyle }
