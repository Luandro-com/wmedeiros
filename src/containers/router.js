import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { Subscribe } from 'unstated'
import AuthContainer from './Auth'
import Header from '../components/Header'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Login from '../components/Login'
import AddNew from '../components/AddNew'
import PortfolioItem from '../components/PortfolioItem'

export default ({ location }) => (
  <Subscribe to={[AuthContainer]}>
    {auth => {
      if (!auth.state.uid) {
        auth.check();
      }
      return (
        <Router>
          <div className="App-container">
            <Header />
            <Route
              render={({ location }) => (
                  <Switch location={location}>
                    <Route exact path="/" component={Projects}/>
                    <Route path="/sobre" component={About}/>
                    <Route path="/contato" component={Contact}/>
                    <Route path="/login" render={() => (
                      auth.state.uid ? (
                        <Redirect to="/novo"/>
                      ) : (
                        <Login/>
                      )
                    )}/>
                    <Route path="/novo" render={props => (
                      auth.state.uid ? (
                        <AddNew {...props} />
                      ) : (
                        <Redirect to="/login"/>
                      )
                    )}/>
                    <Route path="/p/:slug" component={PortfolioItem}/>
                  </Switch>
              )}
            />  
          </div>
        </Router> 
      )
    }
    }
  </Subscribe>
)