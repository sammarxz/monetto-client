import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-neutral-100: #F5F5F5;
    --color-neutral-300: #e1e1e1;
    --color-neutral-700: #9FA2B0;
    --color-neutral-800: #4A4B53;
    --color-neutral-900: #2E2E2E;

    --color-green: #3CC64A;
    --color-red: #ff5c4a;

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
    background: transparent;
    border: none;
    cursor: pointer;

    font-weight: 700;
  }

  [disabled] {
    opacity: 0.6;
    cursor: disabled;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0, .5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: #FFF;
    padding: 4rem;
    position: relative;
    border-radius: var(--border-radius);
    outline: none;
  }

  .react-modal-closer {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
    }
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
    color: var(--color-green) !important;
  }

  .c--red {
    color: var(--color-red) !important;
  }

  .c--neutral-900 {
    color: var(--color-neutral-900) !important;
  }

  .c--neutral-800 {
    color: var(----color-neutral-800) !important;
  }

  .c--neutral-700 {
    color: var(--color-neutral-700);
  }

  .c--neutral-200 {
    color: var(--color-neutral-200);
  }

  .c--neutral-100 {
    color: var(--color-neutral-100);
  }

  .mb--8 {
    margin-bottom: 8px;
  }

  .mb--16 {
    margin-bottom: 16px;
  }

  .mb--24 {
    margin-bottom: 24px;
  }

  .mb--32 {
    margin-bottom: 32px;
  }

  .fs--small {
    font-size: 1rem;
  }

  .fs--normal {
    font-size: 1.2rem;
  }

  .fs--medium {
    font-size: 1.4rem;
  }

  .fs--large {
    font-size: 1.8rem;
  }

  .fw--regular {
    font-weight: 400;
  }

  .fw--medium {
    font-weight: 500;
  }

  .fw--semibold {
    font-weight: 600;
  }

  .fw--bold {
    font-weight: 700;
  }
`

export { GlobalStyle }
