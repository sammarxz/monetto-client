import { useState } from 'react'
import Modal from 'react-modal'
import { FiX } from 'react-icons/fi'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { Input, Button } from '../'

import { useTransactions } from '../../hooks/useTransactions'

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
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  const handleChangeType = (e: React.MouseEvent, t: string) => {
    e.preventDefault()
    setType(t)
  }

  const resetInputs = () => {
    setTitle('')
    setValue(0)
    setType('')
    setCategory('')
  }

  const handleCreateNewTransaction = async (e: React.FormEvent) => {
    e.preventDefault()

    await createTransaction({
      title,
      value,
      category,
      type
    })

    resetInputs()
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-closer" onClick={onRequestClose}>
        <FiX className="c--neutral-700 fs--medium" />
      </button>
      <S.Wrapper onSubmit={handleCreateNewTransaction}>
        <S.Title className="mb--24">Cadastrar Transação</S.Title>
        <Input
          type="text"
          name="title"
          placeholder="Título"
          className="mb--16"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="number"
          name="value"
          placeholder="Valor"
          className="mb--16"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
        <S.TransactionType className="mb--16">
          <Button
            color="green"
            outlined
            fullWidth
            isActive={type === 'income'}
            onClick={(e) => handleChangeType(e, 'income')}
          >
            <FiPlus />
            <span>Receita</span>
          </Button>
          <Button
            color="red"
            outlined
            fullWidth
            isActive={type === 'outcome'}
            onClick={(e) => handleChangeType(e, 'outcome')}
          >
            <FiMinus />
            <span>Despesa</span>
          </Button>
        </S.TransactionType>
        <Input
          type="text"
          name="category"
          placeholder="Categoria"
          className="mb--16"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button type="submit" color="green" fullWidth>
          Cadastrar
        </Button>
      </S.Wrapper>
    </Modal>
  )
}

export { NewTransactionModal }
