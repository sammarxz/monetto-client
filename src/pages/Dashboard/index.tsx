import { useEffect } from 'react'

import { api } from '../../services/api'

import {
  FiArrowUpRight,
  FiArrowDownLeft,
  FiPlus,
  FiSearch
} from 'react-icons/fi'

import { Box, Button, Input, Transaction } from '../../components'

import * as S from './styles'

function Dashboard() {
  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data))
  }, [])

  return (
    <S.Wrapper>
      <S.Balance>
        <span>Balance</span>
        R$ 4.000,00
      </S.Balance>
      <S.Infos>
        <S.Form>
          <Input name="search" type="text" placeholder="Search...">
            <FiSearch />
          </Input>
        </S.Form>
        <Box>
          <span className="d--flex ai--center">
            <FiArrowDownLeft className="c--green" />
            Income:
          </span>
          <h3>R$ 4.500,00</h3>
        </Box>
        <Box>
          <span className="d--flex ai--center">
            <FiArrowUpRight className="c--neutral-900" />
            Outcome:
          </span>
          <h3>R$ 1.500,00</h3>
        </Box>
        <Button color="green">
          <FiPlus />
          Transaction
        </Button>
      </S.Infos>
      <S.Transactions>
        <Transaction
          title="Comida para Vivi"
          date="19 de Março, 2021"
          category="pet"
          value="- R$ 12,00"
          type="outome"
        />
      </S.Transactions>
    </S.Wrapper>
  )
}

export { Dashboard }
