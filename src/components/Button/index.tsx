import styled, { css } from 'styled-components'

const Button = styled.button`
  color: #fff;
  padding: 16px;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(60, 198, 74, 0.5);
  }

  ${(props) => css`
    background-color: var(--color-${props.color});
  `}

  svg {
    font-size: 1.6rem;
    margin-right: 0.6rem;
  }

  &:hover {
    filter: saturate(0.8);
  }
`

export { Button }
