import React, { Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/Auth';
import './style.css';
// import Logo from './logo.png';
import Menu from './menu.svg';
import Close from './close.svg';

const Links = ({ className, close, uid, logout }) => (
  <div className={className}>
    <NavLink activeClassName="Header-nav-active" exact to="/">Projetos</NavLink>
    <NavLink activeClassName="Header-nav-active" to="/sobre">Sobre</NavLink>
    <NavLink activeClassName="Header-nav-active" to="/contato">Contato</NavLink>
    {uid && <NavLink activeClassName="Header-nav-active" to="/novo">Novo Projeto</NavLink> }
    {uid && <div onClick={logout}>Logout</div> }
  </div>
)

 class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.history.action === "PUSH") {
      this.handleClose();
    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  render () {
    return (
      <Subscribe to={[AuthContainer]}>
        { auth =>
          <div className="Header-container">
            <div className="Header-modal" style={ this.state.modalOpen ? { display: 'flex' } : { display: 'none' }}>
              <div onClick={this.handleClose} className="Header-modal-button">
                <img src={Close} alt="close" />
              </div>
              <br />
              <Links className="Header-modal-body" uid={auth.state.uid} />
            </div>
            <header className="Header" style={ !this.state.modalOpen ? { display: 'flex' } : { display: 'none' }}>
              <Link className="Header-logo" to="/">
                {/* <img src={ Logo } alt="Wesley Medeiros Arquitetura" /> */}
                <h1>Wesley Medeiros Arquitetura {auth.uid}</h1>
              </Link>
              <div onClick={this.handleOpen} className="Header-button">
                <img src={Menu} alt="menu" />
              </div>
              <Links className="Header-nav" close={this.handleClose} uid={auth.state.uid} logout={auth.logout} />
            </header>
          </div>
        }
      </Subscribe>
    );
  }
}

export default withRouter(Header);