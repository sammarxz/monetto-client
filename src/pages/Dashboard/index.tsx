import { useState } from 'react'

import {
  FiArrowUpRight,
  FiArrowDownLeft,
  FiPlus,
  FiSearch
} from 'react-icons/fi'

import {
  Box,
  Button,
  Input,
  TransactionTable,
  NewTransactionModal
} from '../../components'

import * as S from './styles'

function Dashboard() {
  const [isModalTransactionOpen, setModalTransactionOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setModalTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setModalTransactionOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Balance>
        <span className="c--neutral-800">Saldo Atual:</span>
        R$ 4.000,00
      </S.Balance>
      <S.Infos>
        <S.Form>
          <Input name="search" type="text" placeholder="Buscar...">
            <FiSearch className="c--neutral-700" />
          </Input>
        </S.Form>
        <Box>
          <span className="d--flex ai--center fw--medium">
            <FiArrowDownLeft className="c--green" />
            Entrada:
          </span>
          <h3>R$ 4.500,00</h3>
        </Box>
        <Box>
          <span className="d--flex ai--center fw--medium">
            <FiArrowUpRight className="c--neutral-900" />
            Saída:
          </span>
          <h3>R$ 1.500,00</h3>
        </Box>
        <Button color="green" onClick={handleOpenNewTransactionModal}>
          <FiPlus />
          Transação
        </Button>
      </S.Infos>
      <S.Transactions>
        <TransactionTable />
      </S.Transactions>
      <NewTransactionModal
        isOpen={isModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </S.Wrapper>
  )
}

export { Dashboard }
