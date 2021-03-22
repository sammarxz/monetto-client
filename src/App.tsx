import { GlobalStyle } from './styles/global'
import { Routes } from './routes'
import { TransactionsProvider } from './TransactionsContext'

const App = (): JSX.Element => (
  <TransactionsProvider>
    <GlobalStyle />
    <div className="container">
      <Routes />
    </div>
  </TransactionsProvider>
)

export { App }
