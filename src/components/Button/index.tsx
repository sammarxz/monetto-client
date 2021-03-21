import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

type ButtonProps = {
  color?: string
  fullWidth?: boolean
  outlined?: boolean
  isActive?: boolean
}

const wrapperModifiers = {
  color: (color: string) => css`
    color: #fff;
    background-color: var(--color-${color});
    border-color: var(--color-${color});

    &:focus {
      border-color: var(--color-${color});
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  outlined: (
    color: string | undefined = 'neutral-700',
    isActive: boolean | undefined
  ) => css`
    background-color: transparent;
    border-color: var(--color-${color});
    color: var(--color-${color});

    ${!!isActive &&
    css`
      background-color: ${transparentize(0.9, color)};
      color: var(--color-${color});
    `}
  `
}

const Button = styled.button<ButtonProps>`
  color: var(--color-neutral-700);
  padding: 16px;
  border: 1px solid var(--color-neutral-700);
  border-radius: var(--border-radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${({ color, fullWidth, outlined, isActive }) => css`
    ${!!color && wrapperModifiers.color(color)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!outlined && wrapperModifiers.outlined(color, isActive)}
  `}

  svg {
    font-size: 1.6rem;
    margin-right: 0.6rem;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: 0;
  }
`

export { Button }
