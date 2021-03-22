import styled from 'styled-components'

const Wrapper = styled.table`
  width: 100%;
  border-spacing: 0 0.4rem;

  th {
    font-weight: 400;
    text-align: left;
    line-height: 1.6;
    color: var(--color-neutral-800);
  }

  td {
    padding-top: 1rem;
    padding-bottom: 1.4rem;
    border-bottom: 2px solid var(--color-neutral-100);

    &:first-child {
      color: var(--color-neutral-900);
    }
  }
`

export { Wrapper }
