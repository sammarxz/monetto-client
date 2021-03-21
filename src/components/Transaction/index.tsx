import { FaPaw, FaDollarSign } from 'react-icons/fa'

import { Box } from '../'

import * as S from './styles'

type TransactionProps = {
  title: string
  date: string
  category: string
  value: string
  type: string
}

const Transaction: React.FC<TransactionProps> = ({
  title,
  date,
  category,
  value,
  type
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
    <S.Wrapper className="d--flex ai--start jc--space-between">
      <S.Info className="d--flex ai--center">
        <Box>{renderIcon()}</Box>
        <S.Heading>
          <h3>{title}</h3>
          <h4>{date}</h4>
        </S.Heading>
      </S.Info>
      <S.Value>{value}</S.Value>
    </S.Wrapper>
  )
}

export { Transaction }
