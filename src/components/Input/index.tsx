import { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  children?: JSX.Element
}

const Input: React.FC<InputProps> = ({ children, ...props }) => (
  <S.Wrapper>
    {children}
    <S.Input {...props} />
  </S.Wrapper>
)

export { Input }
