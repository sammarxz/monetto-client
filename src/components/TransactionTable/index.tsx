import { useContext } from 'react'

import { TransactionsContext } from '../../TransactionsContext'

import * as S from './styles'

type TransactionTableProps = {
  className?: string
}

const TransactionTable = ({ className }: TransactionTableProps) => {
  const { transactions } = useContext(TransactionsContext)

  const formatValue = (value: number, type: string) => {
    const p = type === 'income' ? '+' : '-'
    const formatedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)

    return `${p} ${formatedValue}`
  }

  return (
    <S.Wrapper className={className}>
      <thead>
        <tr>
          <th>Tìtulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, title, value, category, createdAt, type }) => (
          <tr key={id} className="fw--medium">
            <td>{title}</td>
            <td className={`${type === 'income' ? 'c--green' : 'c--red'}`}>
              {formatValue(value, type)}
            </td>
            <td>{category}</td>
            <td>
              {new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
            </td>
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  )
}

export { TransactionTable }
