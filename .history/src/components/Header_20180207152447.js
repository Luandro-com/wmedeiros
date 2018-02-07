import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../logo.png';
import Menu from '../menu.svg';
import Close from '../close.svg';

const Links = ({ className, close }) => (
  <div className={className}>
    <NavLink activeClassName="Header-nav-active" onClick={close} exact to="/">Projetos</NavLink>
    <NavLink activeClassName="Header-nav-active" onClick={close} to="/sobre">Sobre</NavLink>
    <NavLink activeClassName="Header-nav-active" onClick={close} to="/contato">Contato</NavLink>
  </div>
)

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
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
          <div className="Header-logo">
            <img src={ Logo } alt="Wesley Medeiros Arquitetura" />
          </div>
          <div onClick={this.handleOpen} className="Header-button">
            <img src={Menu} alt="menu" />
          </div>
          <Links className="Header-nav" close={this.handleClose} />
        </header>
      </div>
    );
  }
}