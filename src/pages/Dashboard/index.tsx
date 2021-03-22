import { useState } from 'react'
import {
  FiArrowUpRight,
  FiArrowDownLeft,
  FiPlus,
  FiSearch
} from 'react-icons/fi'

import { Transaction, useTransactions } from '../../hooks/useTransactions'

import { formatCurrency } from '../../utils'

import {
  Box,
  Button,
  Input,
  TransactionTable,
  NewTransactionModal
} from '../../components'

import * as S from './styles'

function Dashboard() {
  const { transactions, searchTransaction } = useTransactions()
  const [isModalTransactionOpen, setModalTransactionOpen] = useState(false)

  let localTransactions: Transaction[] = JSON.parse(
    localStorage.getItem('transactions') || '{}'
  )

  if (
    localTransactions &&
    Object.keys(localTransactions).length === 0 &&
    localTransactions.constructor === Object
  ) {
    localTransactions = transactions
  }

  const summary = localTransactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value
        acc.balance += transaction.value
      } else {
        acc.outcome += transaction.value
        acc.balance -= transaction.value
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      balance: 0
    }
  )

  function handleOpenNewTransactionModal() {
    setModalTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setModalTransactionOpen(false)
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    searchTransaction(value)
  }

  return (
    <S.Wrapper>
      <S.Balance>
        <span className="c--neutral-800">Saldo Atual:</span>
        {formatCurrency(summary.balance)}
      </S.Balance>
      <S.Infos>
        <S.Form>
          <Input
            name="search"
            type="search"
            placeholder="Buscar..."
            onChange={(e) => handleSearchChange(e)}
          >
            <FiSearch className="c--neutral-700" />
          </Input>
        </S.Form>
        <Box>
          <span className="d--flex ai--center fw--medium">
            <FiArrowDownLeft className="c--green" />
            Entrada:
          </span>
          <h3>{formatCurrency(summary.income)}</h3>
        </Box>
        <Box>
          <span className="d--flex ai--center fw--medium">
            <FiArrowUpRight className="c--neutral-900" />
            Saída:
          </span>
          <h3>{formatCurrency(summary.outcome)}</h3>
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
