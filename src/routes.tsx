import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Dashboard } from './pages'

// import { isAuthenticated } from './services/auth';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (isAuthenticated() ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//     ))}
//   />
// );

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>
)

export { Routes }
