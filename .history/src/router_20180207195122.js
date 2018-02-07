import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import AddNew from './components/AddNew'
import PortfolioItem from './components/PortfolioItem'

const App = ({ location }) => (
  <Router>
    <div className="App-container">
      <Header />
      <Route
        render={({ location }) => (
            <Switch location={location}>
              <Route exact path="/" component={Projects}/>
              <Route path="/sobre" component={About}/>
              <Route path="/contato" component={Contact}/>
              <Route path="/login" component={Login}/>
              <Route path="/novo" component={AddNew}/>
            </Switch>
        )}
      />  
    </div>
  </Router>
)
export default App