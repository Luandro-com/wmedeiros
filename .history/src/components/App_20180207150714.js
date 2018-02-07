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
              <Route exact path="/" component={Home}/>
              <Route path="/sobre" component={About}/>
              <Route path="/contato" component={Contact}/>
            </Switch>
        )}
      />  
    </div>
  </Router>
)
export default App