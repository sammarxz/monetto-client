import { useState, useContext } from 'react'
import {
  FiArrowUpRight,
  FiArrowDownLeft,
  FiPlus,
  FiSearch
} from 'react-icons/fi'

import { TransactionsContext } from '../../TransactionsContext'

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
  const { transactions } = useContext(TransactionsContext)
  const [isModalTransactionOpen, setModalTransactionOpen] = useState(false)

  const summary = transactions.reduce(
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

  return (
    <S.Wrapper>
      <S.Balance>
        <span className="c--neutral-800">Saldo Atual:</span>
        {formatCurrency(summary.balance)}
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
