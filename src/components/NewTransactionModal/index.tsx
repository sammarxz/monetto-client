import Modal from 'react-modal'

import * as S from './styles'

Modal.setAppElement('#root')

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.Wrapper>
        <h2>Cadastrar Transação</h2>
      </S.Wrapper>
    </Modal>
  )
}

export { NewTransactionModal }
