import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import EasyTransition from 'react-easy-transition'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = ({ location }) => (
  <Router>
    <div>
      <Header />
      <Route
        render={({ location }) => (
          <PageTransition timeout={500}>
            <Switch location={location}>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </PageTransition>
        )}
      />  
    </div>
  </Router>
)
export default App