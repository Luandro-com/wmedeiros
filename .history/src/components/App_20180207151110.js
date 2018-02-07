import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import './App.css';
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = ({ location }) => (
  <Router>
    <div className="App-container">
      <Header />
      <Route
        render={({ location }) => (
          <Switch location={location}>
              <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
              <Route
                location={location}
                key={location.key}
                exact
                path="/" component={Home}
              />
              <Route
                location={location}
                key={location.key}
                exact
                path="/sobre" component={About}
              />
              <Route
                location={location}
                key={location.key}
                exact
                path="/contato" component={Contact}
              />
            </CSSTransitionGroup>
          </Switch>
        )}
      />  
    </div>
  </Router>
)
export default App