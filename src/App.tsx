import { GlobalStyle } from './styles/global'
import { Routes } from './routes'

import { Header } from './components'

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <div className="container">
      <Header />
      <Routes />
    </div>
  </>
)

export { App }
