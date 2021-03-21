import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 4rem;
`

const Balance = styled.h1`
  font-size: 3.6rem;

  span {
    color: var(--color-neutral-900);
    display: block;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
  }
`

const Infos = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 3rem;

  div {
    span {
      margin-right: 0.6rem;
      color: var(--color-neutral-700);

      svg {
        font-size: 1.4rem;
        margin-right: 0.2rem;
      }
    }
  }
`

const Form = styled.form`
  flex: 1;
`

const Transactions = styled.ul`
  margin-top: 3rem;
`

export { Wrapper, Balance, Infos, Form, Transactions }
