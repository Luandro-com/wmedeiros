import React, { Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './style.css';
// import Logo from './logo.png';
import Menu from './menu.svg';
import Close from './close.svg';

const Links = ({ className, close }) => (
  <div className={className}>
    <NavLink activeClassName="Header-nav-active" exact to="/">Projetos</NavLink>
    <NavLink activeClassName="Header-nav-active" to="/sobre">Sobre</NavLink>
    <NavLink activeClassName="Header-nav-active" to="/contato">Contato</NavLink>
    {/* Check if auth */}
    <NavLink activeClassName="Header-nav-active" to="/novo">Novo Projeto</NavLink>
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
      <div className="Header-container">
        <div className="Header-modal" style={ this.state.modalOpen ? { display: 'flex' } : { display: 'none' }}>
          <div onClick={this.handleClose} className="Header-modal-button">
            <img src={Close} alt="close" />
          </div>
          <br />
          <Links className="Header-modal-body" />
        </div>
        <header className="Header" style={ !this.state.modalOpen ? { display: 'flex' } : { display: 'none' }}>
          <Link className="Header-logo" to="/">
            {/* <img src={ Logo } alt="Wesley Medeiros Arquitetura" /> */}
            <h1>Wesley Medeiros Arquitetura</h1>
          </Link>
          <div onClick={this.handleOpen} className="Header-button">
            <img src={Menu} alt="menu" />
          </div>
          <Links className="Header-nav" close={this.handleClose} />
        </header>
      </div>
    );
  }
}

export default withRouter(Header);