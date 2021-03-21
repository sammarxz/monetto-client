import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { api } from '../../services/api'

import {
  FiArrowUpRight,
  FiArrowDownLeft,
  FiPlus,
  FiSearch
} from 'react-icons/fi'

import { Box, Button, Input, Transaction } from '../../components'

import * as S from './styles'

Modal.setAppElement('#root')

function Dashboard() {
  const [isModalTransactionOpen, setModalTransactionOpen] = useState(false)

  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data))
  }, [])

  function handleOpenNewTransactionModal() {
    setModalTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setModalTransactionOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Balance>
        <span>Saldo Atual:</span>
        R$ 4.000,00
      </S.Balance>
      <S.Infos>
        <S.Form>
          <Input name="search" type="text" placeholder="Buscar...">
            <FiSearch />
          </Input>
        </S.Form>
        <Box>
          <span className="d--flex ai--center">
            <FiArrowDownLeft className="c--green" />
            Entrada:
          </span>
          <h3>R$ 4.500,00</h3>
        </Box>
        <Box>
          <span className="d--flex ai--center">
            <FiArrowUpRight className="c--neutral-900" />
            Saída:
          </span>
          <h3>R$ 1.500,00</h3>
        </Box>
        <Button color="green" onClick={handleOpenNewTransactionModal}>
          <FiPlus />
          Transação
        </Button>
      </S.Infos>
      <S.Transactions>
        <Transaction
          title="Comida para Vivi"
          date="19 de Março, 2021"
          category="pet"
          value="- R$ 12,00"
          type="outome"
        />
      </S.Transactions>
      <Modal
        isOpen={isModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </S.Wrapper>
  )
}

export { Dashboard }
