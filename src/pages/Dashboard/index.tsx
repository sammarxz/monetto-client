import { useEffect, useState } from 'react'

import { api } from '../../services/api'

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
  Transaction,
  NewTransactionModal
} from '../../components'

import { TransactionProps } from '../../components/Transaction'

import * as S from './styles'

function Dashboard() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const [isModalTransactionOpen, setModalTransactionOpen] = useState(false)

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  function handleOpenNewTransactionModal() {
    setModalTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setModalTransactionOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Balance>
        <span>Saldo Atual:</span>
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
        {transactions.map(({ id, title, category, value, type, createdAt }) => (
          <Transaction
            key={id}
            id={id}
            title={title}
            createdAt={createdAt}
            category={category}
            value={value}
            type={type}
            className="mb--32"
          />
        ))}
      </S.Transactions>
      <NewTransactionModal
        isOpen={isModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </S.Wrapper>
  )
}

export { Dashboard }
