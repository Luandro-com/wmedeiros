import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import { Subscribe } from 'unstated'
import { AnimatedSwitch, spring } from 'react-router-transition';
import AuthContainer from './Auth'
import Header from '../components/Header'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Login from '../components/Login'
import AddNew from '../components/AddNew'
import PortfolioItem from '../components/PortfolioItem'

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 100,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export default ({ location }) => (
  <Subscribe to={[AuthContainer]}>
    {auth => {
      if (!auth.state.uid) {
        auth.check();
      }
      return (
        <Router>
          <div className="App-container">
            <Header auth={auth} />
              <Route
                render={({ location }) => (
                  <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="switch-wrapper"
                  >
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
                  </AnimatedSwitch>
                )}
              />
          </div>
        </Router> 
      )
    }
    }
  </Subscribe>
)