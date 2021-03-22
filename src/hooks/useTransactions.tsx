import { useContext, useEffect, useState } from 'react'

import { createContext } from 'react'

import { api } from '../services/api'

export type Transaction = {
  id: number
  title: string
  value: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: React.ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
  searchTransaction: (query: string) => void
  deleteTransaction: (id: number | string) => void
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [defaultTransactions, setDefaultTransactions] = useState<Transaction[]>(
    []
  )

  useEffect(() => {
    api.get('/transactions').then(({ data: { transactions } }) => {
      if (!localStorage.getItem('transactions')) {
        setTransactions(transactions)
        setDefaultTransactions(transactions)
        localStorage.setItem('transactions', JSON.stringify(transactions))
      } else {
        const localTransactions: Transaction[] = JSON.parse(
          localStorage.getItem('transactions') || '{}'
        )
        setTransactions(localTransactions)
        setDefaultTransactions(localTransactions)
      }
    })
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })

    setTransactions([...transactions, response.data.transactions])
    setDefaultTransactions([...transactions, response.data.transactions])
    localStorage.setItem(
      'transactions',
      JSON.stringify([...transactions, response.data.transactions])
    )
  }

  function searchTransaction(query: string) {
    const filteredTransactions = defaultTransactions.filter((transaction) =>
      transaction.title.toLowerCase().includes(query.toLowerCase())
    )

    setTransactions(filteredTransactions)
  }

  function deleteTransaction(id: number | string) {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    )
    setTransactions(newTransactions)
    setDefaultTransactions(newTransactions)
    localStorage.setItem('transactions', JSON.stringify(newTransactions))
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        searchTransaction,
        deleteTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}

export { TransactionsProvider, useTransactions }
