import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = ({ location }) => (
  <Router>
    <div class="App-container">
      <Header />
      <Route
        render={({ location }) => (
            <Switch location={location}>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
        )}
      />  
    </div>
  </Router>
)
export default App