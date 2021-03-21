import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-neutral-100: #FAFAFA;
    --color-neutral-200: #F2F2F2;
    --color-neutral-300: #e1e1e1;
    --color-neutral-700: #9FA2B0;
    --color-neutral-800: #4A4B53;
    --color-neutral-900: #2E2E2E;

    --color-green: #3CC64A;

    --border-radius: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 87.5%;

    @media (min-width: 740px) {
      font-size: 95.6%;
    }
  }

  body {
    color: var(--color-neutral-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;

    font-weight: 700;
  }

  [disabled] {
    opacity: 0.6;
    cursor: disabled;
  }

  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 4%;

    @media (min-width: 1400px) {
      max-width: 1080px;
    }
  }

  .d--flex {
    display: flex;
  }

  .ai--center {
    align-items: center;
  }

  .jc--space-between {
    justify-content: space-between;
  }

  .jc--center {
    justify-content: center;
  }

  .c--green {
    color: var(--color-green);
  }

  .c--neutral-900 {
    color: var(--color-neutral-900);
  }
`

export { GlobalStyle }