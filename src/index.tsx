import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'

import { App } from './App'

createServer({
  models: {
    transactions: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela para Aerolab',
          value: 4000,
          type: 'income',
          category: 'Salário ou trabalho extra',
          createdAt: new Date('2021-02-12 10:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          value: 1250,
          type: 'outcome',
          category: 'Dívidas ou Aluguel',
          createdAt: new Date('2021-02-12 10:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
