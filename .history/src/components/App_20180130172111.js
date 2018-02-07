import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PageTransition from 'react-router-page-transition'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = ({ location }) => (
  <Router>
    <div>
      <Header />
      <PageTransition>
        <Switch location={location}>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </PageTransition>
    </div>
  </Router>
)
export default App