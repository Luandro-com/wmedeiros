import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../logo.png';
import Menu from '../menu.svg';
import Close from '../close.svg';

const Links = () => (
  <div>
    <Link to="/">Projetos</Link>
    <Link to="/about">Sobre</Link>
    <Link to="/contact">Contato</Link>
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
          <div onClick={this.handleOpen} className="Header-modal-button">
            <img src={Close} alt="close" />
          </div>
          <div className="Header-modal-body">
            <Links />
          </div>
        </div>
        <header className="Header" style={ !this.state.modalOpen ? { display: 'flex' } : { display: 'none' }}>
          <div className="Header-logo">
            <img src={ Logo } alt="Wesley Medeiros Arquitetura" />
          </div>
          <div onClick={this.handleOpen} className="Header-button">
            <img src={Menu} alt="menu" />
          </div>
          <div className="Header-nav">
            <Links />
          </div>
        </header>
      </div>
    );
  }
}