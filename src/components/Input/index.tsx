import { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  children?: JSX.Element
  className?: string
}

const Input: React.FC<InputProps> = ({ children, className, ...props }) => (
  <S.Wrapper className={className}>
    {children}
    <S.Input {...props} />
  </S.Wrapper>
)

export { Input }
