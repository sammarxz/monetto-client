import { FaPaw, FaDollarSign } from 'react-icons/fa'

import { Box } from '../'

import * as S from './styles'

export type TransactionProps = {
  id: number
  title: string
  value: number
  type: string
  category: string
  createdAt: string
  className?: string
}

const Transaction: React.FC<TransactionProps> = ({
  id,
  title,
  createdAt,
  category,
  value,
  type,
  className
}) => {
  const renderIcon = () => {
    switch (category) {
      case 'pet':
        return <FaPaw />
      default:
        return <FaDollarSign />
    }
  }

  return (
    <S.Wrapper className={`d--flex ai--start jc--space-between ${className}`}>
      <S.Info className="d--flex ai--center">
        <Box>{renderIcon()}</Box>
        <S.Heading>
          <h3>{title}</h3>
          <h4>
            {new Intl.DateTimeFormat('pt-BR', {
              weekday: 'short',
              month: 'long',
              day: '2-digit',
              year: 'numeric'
            }).format(new Date(createdAt))}
          </h4>
        </S.Heading>
      </S.Info>
      <S.Value>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(value)}
      </S.Value>
    </S.Wrapper>
  )
}

export { Transaction }
