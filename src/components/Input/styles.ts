import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 1.4rem;

    & ~ input {
      padding-left: calc(16px * 3);
    }
  }
`

const Input = styled.input`
  padding: 16px;
  background-color: var(--color-neutral-100);
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(60, 198, 74, 0.5);
    border-color: var(--color-green);
  }

  &::placeholder {
    color: var(--color-neutral-700);
  }
`

export { Wrapper, Input }
