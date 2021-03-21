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
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  width: 100%;
`

export { Wrapper, Input }
