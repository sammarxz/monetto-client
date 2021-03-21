import { GlobalStyle } from './styles/global'
import { Routes } from './routes'

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <div className="container">
      <Routes />
    </div>
  </>
)

export { App }
