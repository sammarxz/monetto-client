import { useState } from 'react'
import Modal from 'react-modal'
import Select from 'react-select'
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

type SelectType = {
  value: string
  label: string
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

  const categories = [
    { value: 'Alimentação', label: 'Alimentação' },
    { value: 'Assinaturas e serviços', label: 'Assinaturas e serviços' },
    { value: 'Bares e restaurantes', label: 'Bares e restaurantes' },
    { value: 'Contas da casa', label: 'Contas da casa' },
    { value: 'Compras', label: 'Compras' },
    { value: 'Cuidados pessoais', label: 'Cuidados pessoais' },
    { value: 'Educação', label: 'Educação' },
    { value: 'Investimentos', label: 'Investimentos' },
    { value: 'Lazer e hobbies', label: 'Lazer e hobbies' },
    { value: 'Mercado', label: 'Mercado' },
    { value: 'Pets', label: 'Pets' },
    { value: 'Presentes', label: 'Presentes' },
    { value: 'Roupas', label: 'Roupas' },
    { value: 'Saúde', label: 'Saúde' },
    { value: 'Trabalho', label: 'Trabalho' },
    { value: 'Transporte', label: 'Transporte' },
    { value: 'Viagem', label: 'Viagem' },
    { value: 'Dívidas ou Aluguel', label: 'Dívidas ou Aluguel' },
    { value: 'Outros', label: 'Outros' }
  ]

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

    if (title && value && category && type) {
      await createTransaction({
        title,
        value,
        category,
        type
      })

      resetInputs()
      onRequestClose()
    }
  }

  const handleSelectChange = (selectedOption: SelectType | null) => {
    if (null !== selectedOption) {
      setCategory(selectedOption.value)
    }
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
          required
        />
        <Input
          type="number"
          name="value"
          placeholder="Valor"
          className="mb--16"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          required
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
        <Select
          options={categories}
          className="mb--16"
          classNamePrefix="react-select-container"
          placeholder="Categoria"
          onChange={(o) => handleSelectChange(o)}
          required
          styles={{
            control: (provided) => ({
              ...provided,
              height: 54,
              borderRadius: 12,
              padding: 6,
              backgroundColor: '#F5F5F5',
              border: 'none',
              color: '#2e2e2e'
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#e1e1e1' : '#fff',
              color: '#2E2E2E',
              padding: 16
            }),
            singleValue: (base) => ({
              ...base,
              padding: 6
            })
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#a8ebae',
              primary: '#3CC64A',
              primary50: 'rgba(0,128,0,0.1)'
            }
          })}
        />
        <Button type="submit" color="green" fullWidth>
          Cadastrar
        </Button>
      </S.Wrapper>
    </Modal>
  )
}

export { NewTransactionModal }
