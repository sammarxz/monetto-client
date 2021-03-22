function formatCurrency(value: number) {
  const formatedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return formatedValue
}

export { formatCurrency }
